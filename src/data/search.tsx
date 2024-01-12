import { APP_ROUTES } from '../utils/constants';

export default [
	{
		tags: ['request', 'appointment'],
		route: APP_ROUTES.requestLawyer,
		title: 'Require Legal Assistance',
		subtitle: 'Click here to contact a lawyer',
		button: 'Request Appointment',
		img: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		tags: ['job', 'work', 'career', 'apply'],
		route: APP_ROUTES.career,
		title: 'Careers',
		subtitle: 'Job application section',
		button: 'Apply Now',
		img: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		tags: [
			'services',
			'expertise',
			'practice',
			'proficient',
			'banking',
			'technology',
			'property',
			'tax',
			'hospitality',
		],
		route: APP_ROUTES.allPracticeAreas,
		title: 'Our Expertise',
		subtitle:
			'All our services from Bank & Finance to Entertainment, we have you covered.',
		button: 'Read More',
		img: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		tags: ['team', 'partner', 'people', 'crew', 'associate', 'profile'],
		route: APP_ROUTES.counsel,
		title: 'Our people',
		subtitle: 'Meet our partners and associates.',
		button: 'View Profiles',
		img: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		tags: ['history', 'account', 'about'],
		route: APP_ROUTES.aboutUs,
		title: 'About us',
		subtitle: 'Meet our partners and associates.',
		button: 'Get to Know Us',
		img: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		tags: ['social', 'media', 'twitter', 'facebook', 'instagram', 'linkedin'],
		route: APP_ROUTES.home + '#contact-us',
		title: 'Contact us',
		subtitle: "Are tyou trying to reach us? Here's how to get through.",
		button: 'Reach Out',
		img: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
	},
];
