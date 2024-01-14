import React, { useState } from 'react';
import SwiperCore from 'swiper';

import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Autoplay, FreeMode, Parallax, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { APP_ROUTES } from '../utils/constants';

import PracticeAreaItem from './PracticeAreaItem';
import SliderButtons from './SliderButtons';

import practiceAreas from '../data/practice-areas';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/parallax';
import useCustomColorMode from '../hooks/useCustomColorMode';

const PracticeAreas: React.FC = () => {
	const [swiper, setSwiper] = useState<SwiperCore>();

	const navigate = useNavigate();
	const colorMode = useCustomColorMode();

	return (
		<Box id="practice-areas" width="100vw" px={10} py={20}>
			<Heading fontSize="2rem" size="lg" textAlign="center">
				Practice Areas
			</Heading>

			<Box display="flex" justifyContent="center">
				<Text
					fontSize="1rem"
					fontWeight="400"
					lineHeight="1.5rem"
					textAlign="center"
					width={{
						lg: '60%',
						md: '60%',
						sm: '90%',
					}}
					marginTop={4}
				>
					A.A.Bridge & Spartan is a leading Commercial and Dispute Resolution
					firm with a cutting-edge team of experienced lawyers. We provide a
					broad range of services on both contentious and non- contentious
					aspects of Banking & Finance, Real Estate & Mortgages, Technology &
					Financial Technology, Maritime & Aviation Law, Energy, Taxation, and
					Intellectual Property.
				</Text>
			</Box>

			<Box my={4} display="flex" justifyContent="center">
				<Box width="90%">
					{swiper ? (
						<SliderButtons
							bgColor={colorMode.bgOpaque}
							color={colorMode.colorOpaque}
							swiper={swiper}
						/>
					) : null}

					<Swiper
						modules={[Autoplay, FreeMode, Parallax, A11y]}
						autoplay
						freeMode
						loop
						parallax
						breakpoints={{
							640: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 40,
							},
							991: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
							1224: {
								slidesPerView: 4,
								spaceBetween: 30,
							},
						}}
						onSwiper={(swiper) => setSwiper(swiper)}
						onSlideChange={() => console.log('slide change')}
					>
						{practiceAreas.map((practiceArea) => (
							<SwiperSlide key={practiceArea.title}>
								<PracticeAreaItem practiceArea={practiceArea} />
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</Box>

			<Box display="flex" justifyContent="center">
				<Button
					onClick={() => navigate(APP_ROUTES.allPracticeAreas)}
					size="md"
					borderRadius={5}
					marginTop={8}
					textTransform="capitalize"
				>
					View all practice areas
				</Button>
			</Box>
		</Box>
	);
};

export default PracticeAreas;
