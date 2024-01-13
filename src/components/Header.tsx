import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import useCustomColorMode from '../hooks/useCustomColorMode';
import cover from '../assets/images/dispute.jpg';

interface HeaderProps {
	title: string;
	subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
	const { bgOpaque, colorOpaque } = useCustomColorMode();

	return (
		<Box
			backgroundSize="cover"
			width="100vw"
			bgPosition="center"
			backgroundColor={colorOpaque}
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
				bgColor={bgOpaque}
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
