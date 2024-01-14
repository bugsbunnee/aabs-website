import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import PracticeAreaItem from '../components/PracticeAreaItem';

import practiceAreas from '../data/practice-areas';

const AllPracticeAreas: React.FC = () => {
	return (
		<>
			<Header title="Our Expertise" />

			<Box p={20}>
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

				<SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10} mt={20}>
					{practiceAreas.map((practiceArea) => (
						<PracticeAreaItem
							key={practiceArea.title}
							practiceArea={practiceArea}
						/>
					))}
				</SimpleGrid>
			</Box>

			<ContactUs />
		</>
	);
};

export default AllPracticeAreas;
