import React from 'react';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { Slide } from '../models';
import { COLOR_MODE } from '../utils/constants';

interface Props {
	practiceArea: Slide;
}

const PracticeAreaItem: React.FC<Props> = ({ practiceArea }) => {
	const infoBg = useColorModeValue(COLOR_MODE.DARK, COLOR_MODE.LIGHT);
	const infoColor = useColorModeValue(COLOR_MODE.LIGHT, COLOR_MODE.DARK);

	return (
		<Box
			padding="0.875rem"
			height="23.75rem"
			backgroundImage={practiceArea.img}
			backgroundPosition="center"
			backgroundSize="cover"
			overflow="hidden"
			borderRadius="0.25rem"
			position="relative"
		>
			<Box
				position="absolute"
				top={0}
				bottom={0}
				right={0}
				left={0}
				width="100%"
				_hover={{
					backgroundColor: 'rgba(0,0,0,0.5)',
					transition: 'background-color 0.75s ease-out',
				}}
			/>

			<Box
				bg={infoBg}
				bottom="0.5rem"
				right="0.5rem"
				left="0.5rem"
				position="absolute"
				padding="1rem"
				borderRadius="0.25rem"
				zIndex={99999}
			>
				<Heading
					size="lg"
					color={infoColor}
					fontSize="1rem"
					lineHeight="1.5rem"
					textTransform="capitalize"
				>
					{practiceArea.title}
				</Heading>
				<Text
					color={infoColor}
					fontSize="0.875rem"
					letterSpacing="0.2px"
					lineHeight="1.5rem"
					marginTop="1rem"
					display="none"
					_groupHover={{ display: 'block' }}
				>
					{practiceArea.subtitle}
				</Text>
			</Box>
		</Box>
	);
};

export default PracticeAreaItem;
