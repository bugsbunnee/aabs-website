import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const SearchInput: React.FC = () => {
	const ref = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) {
					// onSubmit(ref.current.value);
					navigate('/');
				}
			}}
		>
			<InputGroup colorScheme="white">
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					borderRadius={30}
					placeholder="Enter something to search"
					variant="filled"
					colorScheme="white"
					fontSize="small"
					focusBorderColor="white"
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
