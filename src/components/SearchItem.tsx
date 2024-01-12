import React from 'react';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';

interface SearchItemProps {
	img: string;
	title: string;
	subtitle: string;
	button: string;
	onClick: () => void;
}

const SearchItem: React.FC<SearchItemProps> = ({
	img,
	title,
	subtitle,
	button,
	onClick,
}) => {
	return (
		<Card
			direction={{ base: 'column', sm: 'row' }}
			overflow="hidden"
			variant="outline"
			width="100%"
		>
			<Image
				objectFit="cover"
				maxW={{ base: '100%', sm: '10rem' }}
				src={img}
				alt={title}
			/>

			<Stack>
				<CardBody pb={0}>
					<Heading size="md" textTransform="capitalize">
						{title}
					</Heading>

					<Text py="2" fontSize="0.875rem">
						{subtitle}
					</Text>
				</CardBody>

				<CardFooter>
					<Button variant="solid" colorScheme="gray" onClick={onClick}>
						{button}
					</Button>
				</CardFooter>
			</Stack>
		</Card>
	);
};

export default SearchItem;
