import React from 'react';

import Hero from '../components/Hero';
import PracticeAreas from '../components/PracticeAreas';
import TailoredSolutions from '../components/TailoredSolutions';
import LatestNews from '../components/LatestNews';
import AwardsAndRecognition from '../components/AwardsAndRecognition';
import ContactUs from '../components/ContactUs';

const HomePage: React.FC = () => {
	return (
		<>
			<Hero />
			<PracticeAreas />
			<TailoredSolutions />
			<LatestNews />
			<AwardsAndRecognition />
			<ContactUs />
		</>
	);
};

export default HomePage;
