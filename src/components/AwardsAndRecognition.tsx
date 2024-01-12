import React from 'react';

import { Box, Heading, Image } from '@chakra-ui/react';
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from '../models';

import Conditional from './Conditional';
import features from '../utils/features';

import 'swiper/css';
import 'swiper/css/autoplay';

const AwardsAndRecognition: React.FC = () => {
	const awards: Pick<Slide, 'img' | 'title'>[] = [
		{
			img: 'https://kennapartners.com/wp-content/uploads/2023/05/6.png',
			title: 'Award 1',
		},
		{
			img: 'https://kennapartners.com/wp-content/uploads/2023/05/Untitled-design.png',
			title: 'Award 2',
		},
		{
			img: 'https://kennapartners.com/wp-content/uploads/2023/05/7.png',
			title: 'Award 3',
		},
		{
			img: 'https://kennapartners.com/wp-content/uploads/2023/05/1.png',
			title: 'Award 4',
		},
		{
			img: 'https://kennapartners.com/wp-content/uploads/2023/05/2-1-e1683703476666.png',
			title: 'Award 5',
		},
		{
			img: 'https://kennapartners.com/wp-content/uploads/2023/05/7.png',
			title: 'Award 6',
		},
	];

	return (
		<Conditional isVisible={features.awards}>
			<Box
				bgColor="gray.50"
				width="100%"
				px={10}
				py={20}
				display="flex"
				alignItems="center"
				flexDirection="column"
			>
				<Heading color="gray.900" fontSize="2rem" size="lg" textAlign="center">
					Awards & Recognition
				</Heading>

				<Box width="80%">
					<Swiper
						speed={900}
						modules={[Autoplay, A11y]}
						autoplay={{ delay: 3 }}
						loop
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 5,
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 5,
							},
							1224: {
								slidesPerView: 5,
								spaceBetween: 5,
							},
						}}
					>
						{awards.map((award) => (
							<SwiperSlide key={award.title}>
								<Image
									alt={award.title}
									src={award.img}
									boxSize={60}
									objectFit="contain"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</Box>
		</Conditional>
	);
};

export default AwardsAndRecognition;
