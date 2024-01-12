import React from 'react';
import Swiper from 'swiper';

import { HStack, IconButton, Spacer } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SliderButtonsProps {
	swiper: Swiper;
	bgColor?: string;
	color?: string;
}

const SliderButtons: React.FC<SliderButtonsProps> = ({
	swiper,
	bgColor = 'gray.900',
	color = 'gray.50',
}) => {
	return (
		<HStack spacing={1} my={5}>
			<Spacer />

			<IconButton
				bgColor={bgColor}
				color={color}
				aria-label="Left Slide"
				size="md"
				icon={<FaChevronLeft />}
				isRound
				onClick={() => swiper.slidePrev()}
			/>

			<IconButton
				bgColor={bgColor}
				color={color}
				aria-label="Right Slide"
				size="md"
				icon={<FaChevronRight />}
				isRound
				onClick={() => swiper.slideNext()}
			/>
		</HStack>
	);
};

export default SliderButtons;
