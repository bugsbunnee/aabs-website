import React from 'react';
import {
	Box,
	Divider,
	Heading,
	Image,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import { Platform, Slide } from '../models';

import ExpandableText from '../components/ExpandableText';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import PlatformIconList from '../components/PlatformIconList';

import heroOne from '../assets/images/dispute.jpg';

interface CounselSlide extends Slide {
	platforms: Platform[];
	body: string;
}

const Counsel: React.FC = () => {
	const ourPeople: CounselSlide[] = [
		{
			img: heroOne,
			title: 'Sobeolisa C. Anyafo, LL.B, B.L, LL.M.',
			subtitle: 'Partner',
			url: '',
			platforms: [
				{
					id: 1,
					slug: 'linkedin',
					url: 'https://www.linkedin.com/in/sobeolisa/',
					color: '#0077b5',
				},
				{
					id: 2,
					slug: 'email',
					url: 'mailto:sobeolisa.anyafo@aabridgeandspartan.com',
					color: '#b23121',
				},
			],
			body: `
						Sobeolisa holds an LL.B from the prestigious University of Nigeria, Nsukka, Enugu State, a B.L
						from the Nigerian Law School, and a Master’s Degree in International Law &amp; Diplomacy from
						the University of Lagos. He is a target-driven and result-oriented Lawyer and has vast
						experience in Litigation and Arbitration. 
						
						He has experience and bias in Real Estate, International
						Commercial Law/Transactions, Constitutional Law, and Criminal Law. Mr. Anyafo has worked
						as Consultant/Solicitor to bodies such as the Accident Investigation Bureau (AIB) and the
						Central Bank of Nigeria amongst others. 
						
						He has successfully handled a number of high-profile
						cases before superior courts and continues to represent several high-profile originations
						including Real Estate Firms, Commercial and Micro Finance Banks in various transactions.
					`,
		},
		{
			img: heroOne,
			title: 'Ebube Ahiarakwe, LL.B, BL,;',
			subtitle: 'Partner',
			url: '',
			platforms: [
				{
					id: 1,
					slug: 'linkedin',
					url: 'https://www.linkedin.com/in/ebube-ahiarakwe-1a811b46/',
					color: '#0077b5',
				},
				{
					id: 2,
					slug: 'email',
					url: 'mailto:ebube.ahiarakwe@aabridgeandspartan.com',
					color: '#b23121',
				},
			],
			body: `
				Ebube Ahiarakwe heads the Abuja office of the Firm. He specializes the areas of Real Estate,
				Dispute Resolution, and general corporate and commercial law. He has experience advising on
				simple and complex contractual arrangements as well as with respect to pre-emptive and
				traditional dispute resolution. While heading the Dispute Resolution department of the Firm,
				Ebube successfully managed litigations up to the appellate level. 
				
				He spearheads third party engagements stemming out of negotiations on behalf of clients and has represented banks,
				securities firms, and other corporate clients in cases ranging from debt recoveries, receiverships
				and winding up proceedings, to fundamental human rights actions.
				
				Mr. Ahiarakwe also leads the Firm in specific transactions in areas including corporate
				restructuring; fraud prevention and remedial action; data protection; outsourcing arrangements;
				real estate development; real estate sales and leases; taxation advice; and mortgages and
				securitizations.
			`,
		},
		{
			img: heroOne,
			title: 'Adaeze Unoma Ekwueme, LL.B, BL, LL.M,',
			subtitle: 'Associate',
			url: '',
			platforms: [
				{
					id: 1,
					slug: 'linkedin',
					url: 'https://www.linkedin.com/in/ekwueme-adaeze-403b777a/',
					color: '#0077b5',
				},
				{
					id: 2,
					slug: 'email',
					url: 'mailto:adaeze.ekwueme@aabridgeandspartan.com',
					color: '#b23121',
				},
			],
			body: `
				Adaeze is an Associate Chartered Secretary with the Institute of Chartered Secretaries and
				Administrators of Nigeria, an Associate Tax Consultant with the Chartered Institute of Taxation,
				Nigeria, and a Licensed Human Resource Practitioner with the Chartered Institute of Personnel
				Management. Her practice rose on the back of several years of hands-on exposure in Corporate
				Law, Corporate Secretary-ship, Corporate Governance, Corporate Administration, Employment,
				Compliance, and Regulatory framework.
				
				In 2013, she was appointed as a member of a Legal Committee selected by the then Hon.
				Attorney-General/Commissioner for Justice, Imo State, Chukwuma Mmachukwu Ume, SAN.
				Presently, Adaeze sits on the Board of various leading corporate organizations in Nigeria.
				
				Adaeze is a consummate professional who believes in delivering her job within the shortest
				possible time with a touch of perfection. She also spends her time engaging in human capital
				development and exploring knowledge in other areas of law.
			`,
		},
	];

	const associateProfiles: CounselSlide[] = [
		{
			img: heroOne,
			title: 'Safiya Mohammed, LL.B, BL, LL.M',
			subtitle: 'Senior Associate',
			url: '',
			platforms: [],
			body: `
						Safiya’s experience revolves around Civil Litigation, Election Petitions, Mediation and
						Arbitration. She has over 10 years’ experience as a dispute resolution expert and has
						been involved in various notable matters leading up to the Supreme Court, including the
						recent high profile election petition matter of Umar Nasko V. Abukakar Bello &amp; Ors.,

						She is a member of the Institute of Chartered Mediators &amp; Conciliators (ChMc) and
						provides dispute resolution services to clients in diverse areas. She has interests in
						economic and regulatory policies where she has been involved in research, trainings
						and publications.,

						Safiya also has extensive experience in rendering legal advice on corporate and
						commercial transactions, contractual negotiations and corporate structures as well as
						extensive practical legal experience on Insolvency practice and the Legal and
						Regulatory framework for business in Nigeria.
					`,
		},
		{
			img: heroOne,
			title: 'Sani Ammani, LL.B, BL;',
			subtitle: 'Associate',
			url: '',
			platforms: [],
			body: `
						Sani Ammani is an Associate in the firm’s Dispute Resolution and Real Estate Practice Groups.

						He conducts local and international dispute resolution as well as provides guidance for
						public sector-related activities including with respect to foreign investments; he renders
						legal advice to local and international clients on compliance with tax and other
						legislations; carries out assessment of, and advises clients regarding, mitigation of
						potential risks involved in various local and transnational transactions and disputes.

						Sani also possesses experience in major Real Estate purchase and sale transactions in
						Nigeria and internationally; as well as in the public sector. He was recently involved in
						the legislative drafting process that led to a major public policy update in the Housing
						Sector in Kano State.
			`,
		},
		{
			img: heroOne,
			title: 'Kingsley Eromosele Ebilueye, LL.B, B.L;',
			subtitle: 'Associate',
			url: '',
			platforms: [],
			body: `
						Kingsley was called to the Nigerian bar in 2018 and holds an LL.B from the Ambrose Alli
						University. He started his legal career as a Litigation Associate at Ubani &amp; Co.
						Solicitors, before joining Tunde Komolafe &amp; Co. as an Associate where he specialized
						in Debt recovery, Commercial litigation and Tax advisory.
						Kingsley is currently part of the Firm’s Corporate and Com
						mercial Law group, where he
						advises corporates on the legal aspects of capital market operations. He is experienced
						in negotiating, conducting due diligence and documentation of various commercial
						arrangements. 

						He also represents the Firm in rendering tax advisory and secretarial
						services to corporate clients including advisory on governance related issues and
						conducting periodic corporate governance compliance audits.
			`,
		},
		{
			img: heroOne,
			title: 'Nancy C. Nwachukwu LL.B, B.L, MNIMC;',
			subtitle: 'Associate',
			url: '',
			platforms: [],
			body: `
						Nancy was called to the Nigerian Bar in 2017, and holds an LL.B from the University of
						Calabar. She is a member of the Nigerian Institute of Management (Chartered) and is
						currently enrolled in the Institute of Chartered Secretaries and Administrators of Nigeria.
						She started her practice in the Law firm of Wale Abeeb Ajayi &amp; Co. after which she
						joined Ubani &amp; Co. Solicitors as a litigation associate. She served as an associate in
						First Continental Solicitors, where she advised on Medical Law and cross border Real
						Estate, and Banking and Finance transactions. 
						
						She later joined the Corporate Law Team of Hedgepoint Commercial Solicitors where she specialized in advisory and
						dispute resolution mainly in the areas of Finance and Employment Law.
						
						Nancy is currently in the Firm’s Banking, Information and Financial Technology group
						where she works closely with Fintech startups, advising them on legal aspects of their
						business including negotiating and documenting strategic partnerships with service
						providers, and managing their relationships with financial sector regulators.
			`,
		},
	];

	const renderProfile = (profile: CounselSlide) => {
		return (
			<Box key={profile.title} maxWidth="25rem">
				<Box
					position="relative"
					overflow="hidden"
					borderRadius="0.5rem"
					width="100%"
					height="18rem"
				>
					<Box
						position="absolute"
						top={0}
						bottom={0}
						right={0}
						left={0}
						width="100%"
						_hover={{
							bgColor: 'rgba(0,0,0,0.5)',
							transition: 'background-color 0.35s ease-out',
						}}
					/>

					<Image
						src={profile.img}
						alt={profile.title}
						maxHeight="auto"
						height="100%"
						width="100%"
						objectFit="cover"
					/>
				</Box>

				<Box mt={5} width="100%">
					<Heading
						fontSize="1.2rem"
						textTransform="capitalize"
						noOfLines={1}
						colorScheme="gray"
					>
						{profile.title}
					</Heading>

					<Text
						colorScheme="gray"
						mt={1}
						fontSize="medium"
						textTransform="capitalize"
					>
						{profile.subtitle}
					</Text>

					<Box my={5}>
						<PlatformIconList platforms={profile.platforms} />
					</Box>

					<ExpandableText my={2} textAlign="justify" fontSize="0.975rem">
						{profile.body}
					</ExpandableText>
				</Box>
			</Box>
		);
	};

	return (
		<>
			<Header title="Our People" subtitle="Legal experts" />

			<Box bgColor="gray.50" py={10} px={20} height="100%">
				<Box>
					<Heading
						mb={10}
						color="gray.900"
						fontSize="2rem"
						size="lg"
						textAlign="center"
					>
						Our People
					</Heading>

					<SimpleGrid columns={{ lg: 3, md: 2, sm: 1 }} spacing={6}>
						{ourPeople.map((profile) => renderProfile(profile))}
					</SimpleGrid>
				</Box>

				<Divider borderColor="gray.500" my={20} />

				<Box>
					<Heading
						mb={10}
						color="gray.900"
						fontSize="2rem"
						size="lg"
						textAlign="center"
					>
						Associate Profiles
					</Heading>

					<SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} spacing={6}>
						{associateProfiles.map((profile) => renderProfile(profile))}
					</SimpleGrid>
				</Box>
			</Box>

			<ContactUs />
		</>
	);
};

export default Counsel;
