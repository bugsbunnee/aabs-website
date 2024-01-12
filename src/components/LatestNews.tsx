import React from 'react';
import SwiperCore from 'swiper';

import {
	Box,
	Button,
	Divider,
	Flex,
	Link,
	Heading,
	Text,
	useToast,
	HStack,
	Icon,
	Spacer,
} from '@chakra-ui/react';

import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

import { Slide } from '../models';
import { APP_ROUTES } from '../utils/constants';

import SliderButtons from './SliderButtons';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const LatestNews: React.FC = () => {
	const [swiper, setSwiper] = React.useState<SwiperCore>();
	const toast = useToast();

	const latestNewsSlides: Omit<Slide, 'img'>[] = [
		{
			title: `Sobeolisa holds an LL.B from the prestigious University of Nigeria, Nsukka, Enugu State, a B.L from the Nigerian Law School, and a Master’s Degree in International Law & Diplomacy from the University of Lagos.`,
			subtitle: 'Sobeolisa C. Anyafo, LL.B, B.L, LL.M. - Partner',
			url: APP_ROUTES.counsel,
		},
		{
			title:
				'Ebube Ahiarakwe heads the Abuja office of the Firm. He specializes the areas of Real Estate, Dispute Resolution, and general corporate and commercial law.',
			subtitle: 'Ebube Ahiarakwe, LL.B, BL, Partner',
			url: APP_ROUTES.counsel,
		},
		{
			title:
				'Adaeze is an Associate Chartered Secretary with the Institute of Chartered Secretaries and Administrators of Nigeria, an Associate Tax Consultant with the Chartered Institute of Taxation, Nigeria, and a Licensed Human Resource Practitioner with the Chartered Institute of Personnel Management.',
			subtitle: 'Adaeze Unoma Ekwueme, LL.B, BL, LL.M, Senior Associate',
			url: APP_ROUTES.counsel,
		},
		{
			title: `Safiya’s experience revolves around Civil Litigation, Election Petitions, Mediation and Arbitration. She has over 10 years’ experience as a dispute resolution expert and has been involved in various notable matters leading up to the Supreme Court, including the recent high profile election petition matter of Umar Nasko V. Abukakar Bello &amp; Ors.`,
			subtitle: 'Safiya Mohammed, LL.B, BL, LL.M; Senior Associate',
			url: APP_ROUTES.counsel,
		},
		{
			title: `Sani Ammani is an Associate in the firm’s Dispute Resolution and Real Estate Practice Groups.`,
			subtitle: 'Sani Ammani, LL.B, BL; Associate',
			url: APP_ROUTES.counsel,
		},
		{
			title: `Kingsley was called to the Nigerian bar in 2018 and holds an LL.B from the Ambrose Alli University.`,
			subtitle: 'Kingsley Eromosele Ebilueye, LL.B, B.L; Associate',
			url: APP_ROUTES.counsel,
		},
	];

	const handleViewAllNews = () => {
		toast({
			status: 'success',
			title: 'No articles available at the moment. Please check back later',
		});
	};

	return (
		<Flex
			width="100vw"
			height={{
				lg: '30rem',
				md: 'auto',
				sm: 'auto',
			}}
			flexDirection={{
				lg: 'row',
				md: 'column',
				sm: 'column',
			}}
		>
			<Box
				bgColor="gray.50"
				px={20}
				py={{ md: 20, sm: 10 }}
				display="flex"
				justifyContent="flex-start"
				alignItems="center"
				height="100%"
				width={{
					lg: '30vw',
					md: '100%',
				}}
			>
				<Box>
					<Heading
						color="gray.900"
						size="lg"
						fontSize="2rem"
						textTransform="capitalize"
					>
						Newsletters & Articles
					</Heading>

					<Text
						color="gray.900"
						size="medium"
						fontSize="1rem"
						lineHeight="1.5rem"
						fontWeight="400"
						marginTop={5}
					>
						We aim to ensure that our clients and the general public stay
						updated on the most recent legal advancements and industry trends.
					</Text>

					<Button
						colorScheme="gray"
						size="md"
						borderRadius={5}
						marginTop={8}
						textTransform="capitalize"
						onClick={handleViewAllNews}
					>
						View all news
					</Button>
				</Box>
			</Box>
			<Box
				width={{
					lg: '70vw',
					md: '100%',
					sm: '100%',
				}}
				py={{ md: 10, sm: 10 }}
				bgColor="dark.700"
				height="100%"
				px={20}
			>
				{swiper ? (
					<SliderButtons bgColor="gray.50" color="dark.700" swiper={swiper} />
				) : null}

				<Swiper
					modules={[Autoplay, Pagination, A11y]}
					autoplay
					loop
					pagination
					onSwiper={(swiper) => setSwiper(swiper)}
					onSlideChange={() => console.log('slide change')}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						1224: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
				>
					{latestNewsSlides.map((slide) => (
						<SwiperSlide key={slide.title}>
							<Box
								padding="0.875rem"
								height="20rem"
								display="flex"
								flexDirection="column"
								justifyContent="center"
							>
								<Box
									height={{
										lg: '50%',
										md: '50%',
										sm: '20%',
									}}
								>
									<Text
										color="gray.50"
										size="lg"
										fontSize="1rem"
										lineHeight="1.5rem"
										fontWeight="400"
										textTransform="capitalize"
										pb={5}
										noOfLines={3}
									>
										{slide.title}
									</Text>
								</Box>

								<Divider colorScheme="dark" my={3} />

								<HStack alignItems="center">
									<Link
										w="100%"
										as={ReactRouterLink}
										color="gray.50"
										fontSize="0.875rem"
										letterSpacing="0.2px"
										lineHeight="1.5rem"
										to={slide.url}
										noOfLines={1}
									>
										{slide.subtitle}
									</Link>

									<Spacer />

									<Icon as={FaChevronRight} boxSize={3} color="gray.50" />
								</HStack>
							</Box>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</Flex>
	);
};

export default LatestNews;
