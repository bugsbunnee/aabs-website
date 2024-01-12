import React from 'react';

import { RxDividerVertical } from 'react-icons/rx';
import { Link, Link as ReactRouterLink } from 'react-router-dom';
import {
	Box,
	Divider,
	IconButton,
	SimpleGrid,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	HStack,
	Text,
	Spacer,
	Center,
	Stack,
	Image,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { APP_ROUTES } from '../utils/constants';

import NewsLetter from './NewsLetter';
import recycle from '../assets/images/recycle.png';

const ContactUs: React.FC = () => {
	const subroutes = [
		{
			label: 'The firm',
			route: APP_ROUTES.aboutUs,
		},
		{
			label: 'Our people',
			route: APP_ROUTES.counsel,
		},
		{
			label: 'Join us',
			route: APP_ROUTES.career,
		},
		{
			label: 'Request a Lawyer',
			route: APP_ROUTES.requestLawyer,
		},
	];

	const socials = [
		{
			color: '#316FF6',
			label: 'Facebook',
			icon: <FaFacebook color="white" size={30} />,
			url: 'https://www.facebook.com/AABridgeAndSpartan',
		},
		{
			color: '#5B51D8',
			label: 'Instagram',
			icon: <FaInstagram color="white" size={30} />,
			url: 'https://instagram.com/aabridgeandspartan',
		},
		{
			color: '#1DA1F2',
			label: 'Twitter',
			icon: <FaTwitter color="white" size={30} />,
			url: 'https://www.twitter.com/aabridgespartan',
		},
		{
			color: '#0077b5',
			label: 'LinkedIn',
			icon: <FaLinkedin color="white" size={30} />,
			url: 'https://www.linkedin.com/company/aabridgeandspartan',
		},
	];

	return (
		<Box id="contact-us" bgColor="gray.900" width="100vw" p={10}>
			<Stack>
				<Center>
					<Box
						width={{ lg: '50%', md: '80%', sm: '90%' }}
						display="flex"
						flexDirection="column"
						alignItems="center"
					>
						<SimpleGrid columns={4} opacity={0.7} spacing={3}>
							{socials.map((social) => (
								<IconButton
									key={social.label}
									variant="ghost"
									aria-label={social.label}
									size="lg"
									icon={social.icon}
									as={Link}
									to={social.url}
									_hover={{
										bgColor: social.color,
										transition: 'background-color 0.3s ease-out',
									}}
								/>
							))}
						</SimpleGrid>

						<Divider borderColor="gray.50" opacity={0.3} my={5} />

						<NewsLetter />

						<Breadcrumb
							my={10}
							separator={<RxDividerVertical color="white" opacity={0.2} />}
						>
							{subroutes.map((subroute) => (
								<BreadcrumbItem key={subroute.label}>
									<BreadcrumbLink
										as={ReactRouterLink}
										to={subroute.route}
										fontSize="0.875rem"
										color="gray.200"
										letterSpacing="2px"
										lineHeight="2.4rem"
										textTransform="capitalize"
										_hover={{ textDecoration: 'none' }}
									>
										{subroute.label}
									</BreadcrumbLink>
								</BreadcrumbItem>
							))}
						</Breadcrumb>
					</Box>
				</Center>

				<Spacer />

				<Stack>
					<Center my={3}>
						<Image
							src={recycle}
							alt="Recycle"
							boxSize={30}
							objectFit="contain"
						/>
					</Center>
				</Stack>

				<HStack>
					<Text color="gray.50" fontSize="x-small">
						© {new Date().getFullYear()} A.A. Bride & Spartan. All Rights
						reserved
					</Text>
					<Spacer />
					<Text color="gray.50" fontSize="x-small">
						Privacy Policy
					</Text>
				</HStack>
			</Stack>
		</Box>
	);
};

export default ContactUs;
