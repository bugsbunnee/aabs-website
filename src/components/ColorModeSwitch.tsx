import React from 'react';
import {
	DarkMode,
	IconButton,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitch: React.FC = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	const color = useColorModeValue('gray.50', 'gray.50');

	return (
		<DarkMode>
			<IconButton
				color={color}
				bg="transparent"
				onClick={toggleColorMode}
				variant="ghost"
				aria-label="Search database"
				size="md"
				icon={colorMode === 'dark' ? <FaMoon /> : <FaSun />}
			/>
		</DarkMode>
	);
};

export default ColorModeSwitch;
