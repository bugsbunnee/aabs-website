import React from 'react';

import { Box, Button } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';

import {
	Autoplay,
	EffectFade,
	FreeMode,
	Navigation,
	Parallax,
	A11y,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { Slide } from '../models';
import { APP_ROUTES } from '../utils/constants';

import heroOne from '../assets/images/hero_one.jpg';
import heroTwo from '../assets/images/hero_two.jpg';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

interface HeroSlide extends Slide {
	button: string;
}

const Hero: React.FC = () => {
	const heroSlides: HeroSlide[] = [
		{
			img: heroOne,
			title: 'Excellence. Integrity.',
			subtitle: "Nigeria's leading Commercial And Dispute Resolution law firm",
			url: APP_ROUTES.requestLawyer,
			button: 'Learn More',
		},
		{
			img: heroTwo,
			title: 'Require Legal Assistance?',
			subtitle: 'Click here to contact a lawyer.',
			url: APP_ROUTES.requestLawyer,
			button: 'Request Appointment',
		},
	];

	return (
		<Swiper
			modules={[Autoplay, EffectFade, FreeMode, Navigation, Parallax, A11y]}
			effect="fade"
			spaceBetween={4}
			slidesPerView={1}
			navigation
			autoplay
			freeMode
			parallax
			className="hero-slides"
		>
			{heroSlides.map((heroSlide) => (
				<SwiperSlide key={heroSlide.title}>
					<Box
						backgroundSize="cover"
						bgPosition="center"
						backgroundRepeat="no-repeat"
						backgroundImage={heroSlide.img}
						height="30rem"
						width="100vw"
						margin={0}
						display="flex"
						alignItems="center"
						justifyContent="flex-start"
						padding={{ lg: '10rem', md: '6rem', sm: '3rem' }}
					>
						<Box
							width="100%"
							height="100%"
							position="absolute"
							top={0}
							right={0}
							left={0}
							bottom={0}
							bgColor="rgba(0,0,0,0.27)"
						/>

						<Box maxWidth="50%" zIndex={9999}>
							<Heading
								color="gray.50"
								size="lg"
								fontSize="2rem"
								textTransform="capitalize"
							>
								{heroSlide.title}
							</Heading>

							<Text
								size="medium"
								fontSize="1.25rem"
								lineHeight="1.5rem"
								fontWeight="500"
								marginTop={5}
								color="gray.50"
							>
								{heroSlide.subtitle}
							</Text>

							<Button
								colorScheme="gray"
								size="lg"
								borderRadius={5}
								as={Link}
								to={heroSlide.url}
								marginTop={8}
								textTransform="capitalize"
							>
								{heroSlide.button}
							</Button>
						</Box>
					</Box>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Hero;
