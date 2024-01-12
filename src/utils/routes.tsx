import { createBrowserRouter } from 'react-router-dom';
import { APP_ROUTES } from './constants';

import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import Layout from '../pages/Layout';
import Career from '../pages/Career';
import Counsel from '../pages/Counsel';
import AboutUs from '../pages/AboutUs';
import RequestLawyer from '../pages/RequestLawyer';
import AllPracticeAreas from '../pages/AllPracticeAreas';

const router = createBrowserRouter([
	{
		path: APP_ROUTES.home,
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: APP_ROUTES.career, element: <Career /> },
			{ path: APP_ROUTES.counsel, element: <Counsel /> },
			{ path: APP_ROUTES.aboutUs, element: <AboutUs /> },
			{ path: APP_ROUTES.allPracticeAreas, element: <AllPracticeAreas /> },
			{ path: APP_ROUTES.requestLawyer, element: <RequestLawyer /> },
		],
	},
]);

export default router;
