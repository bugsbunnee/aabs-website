import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import cover from '../assets/images/dispute.jpg';

interface HeaderProps {
	title: string;
	subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
	return (
		<Box
			backgroundSize="cover"
			width="100vw"
			bgPosition="center"
			backgroundColor="#101010"
			backgroundImage={cover}
			height="20rem"
			display="flex"
			justifyContent="flex-start"
			alignItems="center"
			color="gray.50"
			position="relative"
			px={20}
		>
			<Box
				width="100%"
				height="100%"
				position="absolute"
				top={0}
				right={0}
				left={0}
				bottom={0}
				bgColor="rgba(0,0,0,0.65)"
			/>

			<Box zIndex={999}>
				<Heading fontSize="2rem" fontWeight="500" textTransform="uppercase">
					{title}
				</Heading>

				<Heading
					fontSize="1.5rem"
					fontWeight="500"
					lineHeight="1.4rem"
					textTransform="capitalize"
					mt={3}
				>
					{subtitle}
				</Heading>
			</Box>
		</Box>
	);
};

export default Header;
