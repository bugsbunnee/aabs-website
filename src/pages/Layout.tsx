import React from 'react';

import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import NavBar from '../components/NavBar';
import ScrollToTop from '../components/ScrollToTop';

const Layout: React.FC = () => {
	return (
		<>
			<ScrollToTop />
			<NavBar />
			<Box>
				<Outlet />
			</Box>
		</>
	);
};

export default Layout;
