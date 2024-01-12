import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'dark',
};

const theme = extendTheme({
	config,
	colors: {
		dark: {
			900: '#101010',
			800: '#DCDCDC',
			700: '#08133A',
		},
		error: {
			100: 'tomato',
		},
		gray: {
			50: '#ffffff',
			100: '#ededed',
			200: '#d3d3d3',
			300: '#b3b3b3',
			400: '#a0a0a0',
			500: '#898989',
			600: '#6c6c6c',
			700: '#202020',
			800: '#121212',
			900: '#111',
		},
		link: {
			100: '#0000EE',
		},
	},
	fonts: {
		heading: `'Urbanist', sans-serif`,
		body: `'Urbanist', sans-serif`,
	},
});

export default theme;
