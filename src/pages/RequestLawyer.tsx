import React from 'react';
import { Box, Flex, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import { FaEnvelope, FaHome, FaPhone } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';

import BriefLawyer from '../components/BriefLawyer';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import useCustomColorMode from '../hooks/useCustomColorMode';

const RequestLawyer: React.FC = () => {
	const { bg, bgOpaque } = useCustomColorMode();

	return (
		<>
			<Header title="Request a Lawyer" />

			<Box p={5}>
				<Flex
					p={{ base: 10, md: 20, lg: 20 }}
					direction={{ base: 'column', lg: 'row' }}
				>
					<Box
						flex={1}
						justifyContent="center"
						display="flex"
						alignItems="center"
					>
						<Box maxWidth="90%">
							<Box>
								<Heading fontSize="2rem" textTransform="capitalize">
									Get Started
								</Heading>

								<Text
									fontSize="1rem"
									fontWeight="400"
									lineHeight="1.5rem"
									letterSpacing="0.2px"
									textAlign="justify"
									my={5}
								>
									Please fill in this form and one of our specialist lawyers
									will contact you as soon as possible using the contact method
									you supply in the form below.
								</Text>

								<Text
									fontSize="1rem"
									fontWeight="400"
									lineHeight="1.5rem"
									letterSpacing="0.2px"
									textAlign="justify"
									colorScheme="gray"
									my={5}
								>
									Compulsory fields are marked with an asterisk.
								</Text>
							</Box>

							<Box mt={10}>
								<Heading
									fontSize="2rem"
									textTransform="capitalize"
									my={5}
									colorScheme="gray"
								>
									You can reach us here
								</Heading>

								<Stack spacing={6}>
									{contactInfo.map((info) => (
										<Box
											bg={bgOpaque}
											key={info.label}
											p={5}
											borderRadius={4}
											display="inline-block"
										>
											<Stack>
												<Heading
													fontSize="1rem"
													fontWeight="500"
													textTransform="capitalize"
												>
													{info.label}
												</Heading>

												<HStack>
													{info.icon}

													<Text
														letterSpacing="0.2px"
														fontWeight="400"
														fontSize="0.875rem"
													>
														{info.value}
													</Text>
												</HStack>
											</Stack>
										</Box>
									))}
								</Stack>
							</Box>
						</Box>
					</Box>

					<Box
						flex={1}
						ml={{ base: 0, lg: 10 }}
						mt={{ base: 10, lg: 0 }}
						justifyContent="center"
						alignItems="center"
						display="flex"
					>
						<Box bg={bg} width="90%" p={10} borderRadius={10}>
							<BriefLawyer />
						</Box>
					</Box>
				</Flex>
			</Box>

			<ContactUs />
		</>
	);
};

const contactInfo = [
	{
		icon: <FaEnvelope />,
		label: 'Email',
		value: 'info@aabridgeandspartan.com',
	},
	{
		icon: <FaPhone />,
		label: 'Telephone',
		value: '08063917722, 08035239164',
	},
	{
		icon: <FaHome />,
		label: 'Lagos',
		value:
			'Lagos: 2 nd Floor, Ibukun House, 14 Adetokunbo Ademola Street, Victoria Island, Lagos',
	},
	{
		icon: <IoMdHome />,
		label: 'Abuja',
		value: 'Abuja: 4 Agatu Street, Off Gimbiya Street, Area 11, Abuja',
	},
];

export default RequestLawyer;
