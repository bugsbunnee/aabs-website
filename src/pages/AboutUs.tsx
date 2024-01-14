import React from 'react';
import {
	Box,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { Slide } from '../models';
import { COLOR_MODE } from '../utils/constants';

import AwardsAndRecognition from '../components/AwardsAndRecognition';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';

import useCustomColorMode from '../hooks/useCustomColorMode';

import heroTwo from '../assets/images/hero_two.jpg';
import realEstate from '../assets/images/real_estate.jpg';
import excellence from '../assets/images/excellence.jpg';
import mission from '../assets/images/mission.jpg';
import vision from '../assets/images/vision.jpg';

const AboutUs: React.FC = () => {
	const colorMode = useCustomColorMode();
	const coreValuesBg = useColorModeValue('gray.200', COLOR_MODE.DARK_OPAQUE);

	const coreValues: Slide[] = [
		{
			img: excellence,
			title: 'Excellence',
			subtitle:
				'We always ensure our services reflect the very best standards of expertise provided by our diverse and passionate team of lawyers, paralegals, and support staff.',
			url: '',
		},
		{
			img: realEstate,
			title: 'Integrity',
			subtitle:
				'We pride ourselves in our devotion to demonstrating the highest ethical ideals in our legal practice, and our commitment to upholding the rule of law.',
			url: '',
		},
		{
			img: vision,
			title: 'Our Vision',
			subtitle:
				'We aim to be Nigeria’s foremost corporate and commercial legal service provider, delivering world-class services to our clients with the highest ethical standards.',
			url: '',
		},
		{
			img: mission,
			title: 'Our Mission Statement',
			subtitle:
				'Our goal is to always provide our clients with innovative, competent, cost-effective, and well-timed legal solutions.',
			url: '',
		},
	];

	return (
		<>
			<Header title="About Us" />

			<Flex p={20} flexDirection={{ sm: 'column', md: 'row', lg: 'row' }}>
				<Box flex={1} borderRadius={5} overflow="hidden">
					<Image
						src={heroTwo}
						alt="About Us"
						width="100%"
						height="100%"
						objectFit="cover"
					/>
				</Box>

				<Box
					flex={1}
					mt={{ sm: 10 }}
					ml={{ lg: 10 }}
					justifyContent="center"
					alignItems="center"
					display="flex"
				>
					<Box maxWidth="90%">
						<Heading
							fontSize="2rem"
							fontWeight="500"
							textTransform="capitalize"
						>
							About A.A Bridge & Spartan
						</Heading>

						<Text
							fontSize="1rem"
							fontWeight="400"
							lineHeight="1.5rem"
							letterSpacing="0.2px"
							textAlign="justify"
							my={5}
						>
							A.A.BRIDGE & SPARTAN is a full-service law firm with the capacity
							to handle the legal needs of clients in Nigeria’s peculiar
							business environment. The Firm is made up of highly experienced
							corporate and commercial lawyers whose experience and expertise
							span the areas of Corporate and Commercial law; Banking and
							Finance; Energy and Natural resources; Dispute Resolution;
							Insurance; Maritime; Intellectual Property and Public Procurement.
						</Text>

						<Text
							fontSize="1rem"
							fontWeight="400"
							lineHeight="1.5rem"
							letterSpacing="0.2px"
							textAlign="justify"
							my={5}
						>
							Our goal is to always provide our clients with innovative,
							competent, cost-effective, and well- timed legal solutions.
						</Text>

						<Text
							fontSize="1rem"
							fontWeight="400"
							lineHeight="1.5rem"
							letterSpacing="0.2px"
							textAlign="justify"
							my={5}
						>
							At A.A.BRIDGE &amp; SPARTAN, we offer deep knowledge not just of
							the law, but of the sectors in which our clients work. This extra
							dimension to our expertise sets us apart. We are dedicated to
							working with clients to help them achieve their business goals and
							overcome legal challenges anywhere in Nigeria. As a commercial
							practice, we are conscious of offering practical, cost- effective,
							and result-oriented solutions to meet our clients varied legal
							needs.
						</Text>
					</Box>
				</Box>
			</Flex>

			<Box bg={coreValuesBg} p={20} height="100%">
				<SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} spacing={6}>
					{coreValues.map((value) => (
						<Box
							key={value.title}
							mt={{ sm: 10 }}
							maxWidth={{ lg: '20rem', md: '20rem', sm: '100%' }}
						>
							<Box
								position="relative"
								overflow="hidden"
								borderRadius="0.25rem"
								width="100%"
								height="22rem"
							>
								<Box
									position="absolute"
									top={0}
									bottom={0}
									right={0}
									left={0}
									width="100%"
									backgroundColor={colorMode.bgOpaque}
									_hover={{
										bgColor: '#08133AE3',
										opacity: 0.3,
										transition: 'background-color 0.35s ease-out',
									}}
								/>

								<Image
									src={value.img}
									alt={value.title}
									maxHeight="auto"
									height="100%"
									width="100%"
									objectFit="cover"
								/>
							</Box>

							<Box mt={5} width="100%">
								<Heading
									fontSize="1.5rem"
									fontWeight="500"
									lineHeight="1.5rem"
									textTransform="capitalize"
								>
									{value.title}
								</Heading>

								<Text mt={5}>{value.subtitle}</Text>
							</Box>
						</Box>
					))}
				</SimpleGrid>
			</Box>

			<AwardsAndRecognition />

			<ContactUs />
		</>
	);
};

export default AboutUs;
