import React from 'react';

import {
	Box,
	Button,
	Collapse,
	HStack,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Show,
	SimpleGrid,
	Spacer,
	useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaCaretUp, FaCaretDown, FaSearch } from 'react-icons/fa';
import { IoMdClose, IoMdCloseCircle } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { APP_ROUTES } from '../utils/constants';

import ColorModeSwitch from './ColorModeSwitch';
import Conditional from './Conditional';
import SearchInput from './SearchInput';

import logoLarge from '../assets/images/logo.png';
import logoSmall from '../assets/images/logo_only.png';
import useCustomColorMode from '../hooks/useCustomColorMode';

interface NavigationLink {
	label: string;
	sublinks: { label: string; route: string }[];
}

const NavBar: React.FC = () => {
	const { isOpen, onToggle } = useDisclosure();
	const { color } = useCustomColorMode();

	const navigationLinks: NavigationLink[] = [
		{
			label: 'The Firm',
			sublinks: [
				{
					label: 'Our people',
					route: APP_ROUTES.counsel,
				},
				{
					label: 'About us',
					route: APP_ROUTES.aboutUs,
				},
			],
		},
		{
			label: 'Practice Areas',
			sublinks: [
				{
					label: 'Our expertise',
					route: APP_ROUTES.allPracticeAreas,
				},
			],
		},
		{
			label: 'Career',
			sublinks: [
				{
					label: 'Join us',
					route: APP_ROUTES.career,
				},
			],
		},
		{
			label: 'Newsletters',
			sublinks: [
				{
					label: 'Articles',
					route: '/',
				},
			],
		},
	];

	const renderLargeMenuNavigation = (navigationLink: NavigationLink) => {
		return (
			<Menu key={navigationLink.label}>
				{({ isOpen }) => (
					<>
						<MenuButton
							textTransform="uppercase"
							textAlign="right"
							color="gray.50"
							fontSize="small"
							bgColor="gray.900"
							variant="link"
							_active={{ textDecoration: 'none' }}
							_hover={{ textDecoration: 'none', opacity: 0.7 }}
							isActive={isOpen}
							as={Button}
							rightIcon={isOpen ? <FaCaretUp /> : <FaCaretDown />}
						>
							{navigationLink.label}
						</MenuButton>
						<MenuList
							zIndex={99999}
							bgColor="dark.900"
							border={0}
							borderRadius={0}
							color="gray.50"
						>
							{navigationLink.sublinks.map((sublink) => (
								<MenuItem
									bgColor="dark.900"
									fontSize="small"
									key={sublink.label}
									as={Link}
									to={sublink.route}
								>
									{sublink.label}
								</MenuItem>
							))}
						</MenuList>
					</>
				)}
			</Menu>
		);
	};

	const renderSmallMenuNavigation = () => {
		return (
			<Menu closeOnSelect={false} isLazy>
				{({ isOpen }) => (
					<>
						<MenuButton
							zIndex={99999}
							_hover={{ backgroundColor: 'transparent', opacity: 0.7 }}
							variant="ghost"
							as={IconButton}
							_active={{ backgroundColor: 'transparent' }}
							icon={
								isOpen ? (
									<IoMdClose color="white" size={25} />
								) : (
									<RxHamburgerMenu color="white" size={25} />
								)
							}
						/>
						<MenuList
							width="100vw"
							zIndex={99999}
							bgColor="dark.900"
							border={0}
							borderRadius={0}
							color="gray.50"
						>
							{navigationLinks.map((navigationLink) => (
								<React.Fragment key={navigationLink.label}>
									<MenuItem onClick={undefined} p={3} bgColor="gray.900">
										{renderLargeMenuNavigation(navigationLink)}
									</MenuItem>
									<Conditional
										isVisible={
											navigationLink.label !==
											navigationLinks[navigationLinks.length - 1].label
										}
									>
										<MenuDivider opacity={0.3} borderWidth={0.5} />
									</Conditional>
								</React.Fragment>
							))}
						</MenuList>
					</>
				)}
			</Menu>
		);
	};

	return (
		<>
			<Box position="sticky" top={0} width="100vw" zIndex={9999}>
				<HStack
					bgColor="transparent"
					bgImage="linear-gradient(309deg, #101010 70%, #FFFFFF 70%)"
					height="5rem"
					paddingTop={1}
					paddingBottom={1}
					paddingLeft={8}
					paddingRight={8}
				>
					<Link to={APP_ROUTES.home}>
						<Show above="lg">
							<Image
								alt="A.A Bridge & Spartan"
								src={logoLarge}
								boxSize="25rem"
								objectFit="contain"
							/>
						</Show>
						<Show below="lg">
							<Image
								alt="A.A Bridge & Spartan"
								src={logoSmall}
								boxSize="6.5rem"
								objectFit="contain"
							/>
						</Show>
					</Link>

					<Spacer />

					<Show above="lg">
						<HStack>
							<SimpleGrid columns={{ sm: 2, md: 2, lg: 4 }} spacing={3}>
								{navigationLinks.map((navigationLink) =>
									renderLargeMenuNavigation(navigationLink)
								)}
							</SimpleGrid>

							<IconButton
								onClick={onToggle}
								_hover={{ bg: 'transparent' }}
								variant="ghost"
								aria-label="Search database"
								size="lg"
								icon={
									isOpen ? (
										<IoMdCloseCircle color="white" />
									) : (
										<FaSearch color="white" />
									)
								}
							/>

							<ColorModeSwitch />
						</HStack>
					</Show>

					<Show below="lg">{renderSmallMenuNavigation()}</Show>
				</HStack>

				<Collapse in={isOpen}>
					<Box
						bg={color}
						minHeight="5rem"
						p={5}
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
					>
						<Box width="100%" maxW={{ lg: '30%', md: '50%', sm: '90%' }}>
							<SearchInput />
						</Box>
					</Box>
				</Collapse>
			</Box>
		</>
	);
};

export default NavBar;
