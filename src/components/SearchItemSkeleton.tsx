import {
	Card,
	CardBody,
	CardFooter,
	Skeleton,
	SkeletonText,
	Stack,
} from '@chakra-ui/react';

const SearchItemSkeleton = () => {
	return (
		<Card
			direction={{ base: 'column', sm: 'row' }}
			overflow="hidden"
			variant="outline"
			width="100%"
		>
			<Skeleton w="10rem" />

			<Stack width="100%">
				<CardBody pb={0}>
					<SkeletonText />
				</CardBody>

				<CardFooter>
					<Skeleton w="6rem" h="2rem" />
				</CardFooter>
			</Stack>
		</Card>
	);
};

export default SearchItemSkeleton;
