import React from 'react';

import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

import { HStack, IconButton } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Platform } from '../models';
import { Link } from 'react-router-dom';

interface Props {
	platforms: Platform[];
}

const PlatformIconList: React.FC<Props> = ({ platforms = [] }) => {
	const iconMap: { [key: string]: IconType } = {
		linkedin: FaLinkedin,
		email: FaEnvelope,
	};

	const renderPlatform = (platform: Platform) => {
		const Icon = iconMap[platform.slug];

		return (
			<IconButton
				aria-label={platform.slug}
				key={platform.id}
				icon={<Icon size={25} />}
				variant="ghost"
				color={platform.color}
				as={Link}
				to={platform.url}
			/>
		);
	};

	return (
		<HStack marginY={1} spacing={1}>
			{platforms.map((platform) => renderPlatform(platform))}
		</HStack>
	);
};

export default PlatformIconList;
