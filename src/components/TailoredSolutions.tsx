import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Box,
	Button,
	Center,
	Heading,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';

import { Slide } from '../models';
import { APP_ROUTES } from '../utils/constants';

import useCustomColorMode from '../hooks/useCustomColorMode';

import corporate from '../assets/images/corporate.jpg';
import tailored from '../assets/images/hero_two.jpg';
import mission from '../assets/images/mission.jpg';
import excellence from '../assets/images/excellence.jpg';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

const TailoredSolutions: React.FC = () => {
	const navigate = useNavigate();
	const colorMode = useCustomColorMode();

	const tailoredSolutionSlides: Slide[] = [
		{
			img: tailored,
			title: 'Tailored solutions',
			subtitle: "Nigeria's leading Commercial & Dispute Resolution law firm",
			url: '',
		},
		{
			img: excellence,
			title: 'Excellence',
			subtitle:
				'We always ensure our services reflect the very best standards of expertise provided by our diverse and passionate team of lawyers, paralegals, and support staff.',
			url: '',
		},
		{
			img: corporate,
			title: 'Integrity',
			subtitle:
				'We pride ourselves in our devotion to demonstrating the highest ethical ideals in our legal practice, and our commitment to upholding the rule of law.',
			url: '',
		},
		{
			img: mission,
			title: 'Innovation',
			subtitle:
				'Our goal is to always provide our clients with innovative, competent, cost-effective, and well-timed legal solutions.',
			url: '',
		},
	];

	return (
		<Box bgColor={colorMode.bg} width="100vw" px={10} py={20}>
			<Heading
				color={colorMode.color}
				fontSize="2rem"
				size="lg"
				textAlign="center"
			>
				Our Core Values
			</Heading>

			<Box display="flex" justifyContent="center">
				<Text
					color={colorMode.color}
					fontSize="1rem"
					fontWeight="400"
					lineHeight="1.5rem"
					textAlign="center"
					width="60%"
					marginTop={4}
				>
					We are providing trail-blazing, innovative legal services with a
					global perspective - tailored to meet our clients’ peculiar business
					and personal needs.
				</Text>
			</Box>

			<Box my={4} display="flex" justifyContent="center">
				<Box width="80%">
					<SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }}>
						{tailoredSolutionSlides.map((slide) => (
							<Box
								key={slide.title}
								display="flex"
								justifyContent="center"
								alignItems="center"
								height="23.75rem"
								backgroundImage={slide.img}
								backgroundPosition="center"
								backgroundSize="cover"
								overflow="hidden"
								position="relative"
								mt={8}
							>
								<Box
									position="absolute"
									top={0}
									bottom={0}
									right={0}
									left={0}
									width="100%"
									backgroundColor="rgba(8, 19, 58, 0.5)"
									zIndex={10}
									_hover={{
										backgroundColor: 'rgba(0, 0, 0, 0.8)',
										transition: 'background-color 0.35s ease-out',
									}}
								/>

								<Box width="90%" zIndex={20}>
									<Heading
										size="lg"
										color="gray.50"
										fontSize="1.2rem"
										lineHeight="1.5rem"
										textTransform="capitalize"
										textAlign="center"
									>
										{slide.title}
									</Heading>
									<Text
										color="gray.50"
										fontSize="0.875rem"
										letterSpacing="0.2px"
										lineHeight="1.4rem"
										marginY={3}
										textAlign="center"
										noOfLines={2}
									>
										{slide.subtitle}
									</Text>
									<Center>
										<Button
											size="xs"
											marginLeft={1}
											fontWeight="bold"
											onClick={() => navigate(APP_ROUTES.aboutUs)}
										>
											View More
										</Button>
									</Center>
								</Box>
							</Box>
						))}
					</SimpleGrid>
				</Box>
			</Box>
		</Box>
	);
};

export default TailoredSolutions;
