import React from 'react';
import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Link,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

import ContactUs from '../components/ContactUs';
import Header from '../components/Header';

import corporate from '../assets/images/corporate.jpg';

const Career: React.FC = () => {
	const linkColor = useColorModeValue('blue.600', 'blue.200');

	return (
		<>
			<Header title="Career" />

			<Flex p={20} flexDirection={{ base: 'column', lg: 'row' }}>
				<Box flex={1} borderRadius={5} overflow="hidden">
					<Image
						src={corporate}
						alt="Career"
						width="100%"
						height="100%"
						maxH="30rem"
						objectFit="cover"
					/>
				</Box>

				<Box
					flex={1}
					mt={{ base: 10, lg: 0 }}
					ml={{ base: 0, lg: 10, md: 10, sm: 0 }}
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
							Join Us at A.A Bride & Spartan
						</Heading>

						<Text
							fontSize="1rem"
							fontWeight="400"
							lineHeight="1.5rem"
							letterSpacing="0.2px"
							textAlign="justify"
							my={5}
						>
							We are always seeking to add new talent to our diverse legal team.
							If you are interested in building a career with A.A.Bridge &
							Spartan, send an email with your curriculum vitae and a cover
							letter to{' '}
							<Link
								href={`mailto:${import.meta.env.VITE_EMAIL}`}
								color={linkColor}
							>
								{import.meta.env.VITE_EMAIL}
							</Link>
						</Text>

						<Button
							as={Link}
							href={`mailto:${import.meta.env.VITE_EMAIL}`}
							_hover={{ textDecoration: 'none' }}
							size="lg"
							borderRadius={5}
							marginTop={8}
							textTransform="capitalize"
						>
							Send Mail
						</Button>
					</Box>
				</Box>
			</Flex>

			<ContactUs />
		</>
	);
};

export default Career;
