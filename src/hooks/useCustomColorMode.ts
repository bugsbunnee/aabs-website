import { useColorModeValue } from '@chakra-ui/react';
import { COLOR_MODE } from '../utils/constants';

const useCustomColorMode = () => {
	const { LIGHT, LIGHT_OPAQUE, DARK, DARK_OPAQUE } = COLOR_MODE;

	const bg = useColorModeValue(DARK, LIGHT);
	const color = useColorModeValue(LIGHT, DARK);
	const bgOpaque = useColorModeValue(LIGHT_OPAQUE, DARK_OPAQUE);
	const colorOpaque = useColorModeValue(DARK, LIGHT);

	return { bg, color, bgOpaque, colorOpaque };
};

export default useCustomColorMode;
