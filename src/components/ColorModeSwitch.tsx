import React from 'react';
import {
	DarkMode,
	IconButton,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { COLOR_MODE } from '../utils/constants';

const ColorModeSwitch: React.FC = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	const color = useColorModeValue('gray.50', 'gray.50');
	const bgOpaque = useColorModeValue(COLOR_MODE.DARK_OPAQUE, COLOR_MODE.DARK_OPAQUE);

	return (
		<DarkMode>
			<IconButton
				color={color}
				bg={bgOpaque}
				onClick={toggleColorMode}
				variant="ghost"
				aria-label="Search database"
				size="md"
				icon={colorMode === 'dark' ? <IoMdMoon /> : <IoMdSunny />}
			/>
		</DarkMode>
	);
};

export default ColorModeSwitch;
