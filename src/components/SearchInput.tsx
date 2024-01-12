import {
	ChangeEvent,
	useEffect,
	useMemo,
	useState,
	useTransition,
} from 'react';
import {
	Box,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	List,
	ListItem,
	Spinner,
	Stack,
} from '@chakra-ui/react';

import { BsSearch } from 'react-icons/bs';
import { IoMdCloseCircle } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

import Conditional from './Conditional';
import SearchItem from './SearchItem';
import SearchItemSkeleton from './SearchItemSkeleton';

import results from '../data/search';

const SearchInput: React.FC = () => {
	const [searchText, setSearchText] = useState('');
	const [isPending, startTransition] = useTransition();

	const navigate = useNavigate();
	const location = useLocation();

	const filteredResults = useMemo(() => {
		if (searchText) {
			return results.filter((result) => {
				return (
					result.tags.filter((tag) => {
						return tag.indexOf(searchText.toLowerCase()) !== -1;
					}).length > 0
				);
			});
		}

		return results;
	}, [searchText]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		startTransition(() => {
			setSearchText(e.currentTarget.value);
		});
	};

	const handleRightElementClick = () => {
		if (isPending) return null;

		return searchText.length > 0 ? setSearchText('') : null;
	};

	const renderPending = () => {
		return [1, 2, 3, 4].map((digit) => <SearchItemSkeleton key={digit} />);
	};

	const renderResults = () => {
		return filteredResults.map((result) => (
			<ListItem key={result.title}>
				<SearchItem
					img={result.img}
					title={result.title}
					subtitle={result.subtitle}
					button={result.button}
					onClick={() => navigate(result.route)}
				/>
			</ListItem>
		));
	};

	const renderInputRightElement = () => {
		if (searchText.length > 0) {
			return isPending ? <Spinner /> : <IoMdCloseCircle />;
		}

		return null;
	};

	useEffect(() => {
		setSearchText('');
	}, [location.pathname]);

	return (
		<Box position="relative">
			<form>
				<InputGroup w="100%">
					<InputLeftElement children={<BsSearch />} />
					<Input
						_focus={{ bgColor: 'gray.50' }}
						bgColor="gray.50"
						colorScheme="gray"
						value={searchText}
						onChange={handleChange}
						borderRadius={30}
						placeholder="Enter something to search"
						variant="filled"
						fontSize="medium"
						color="gray.900"
						focusBorderColor="dark.800"
					/>
					{
						<InputRightElement
							onClick={handleRightElementClick}
							children={renderInputRightElement()}
						/>
					}
				</InputGroup>
			</form>
			<Conditional isVisible={searchText.length > 0}>
				<List
					mt={3}
					width={{ lg: '30%' }}
					position="fixed"
					maxHeight={500}
					overflowY="scroll"
					borderRadius={5}
					bgColor="gray.900"
					zIndex={9999}
					p={5}
				>
					<Stack spacing={3}>
						{isPending ? renderPending() : renderResults()}
					</Stack>
				</List>
			</Conditional>
		</Box>
	);
};

export default SearchInput;
