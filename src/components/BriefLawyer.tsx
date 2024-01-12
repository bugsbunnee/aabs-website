import React from 'react';

import {
	Box,
	Button,
	Divider,
	HStack,
	Heading,
	Text,
	useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import InputField from './InputField';
import SelectField from './SelectField';
import TextArea from './TextArea';

import useCountries from '../hooks/useCountries';
import useStates from '../hooks/useStates';

import resend from '../services/resend';
import contactMethods from '../data/contact-methods';
import gender from '../data/gender';

const schema = z.object({
	complaint: z
		.string()
		.min(15, { message: 'Please provide a more descriptive account' }),
	firstName: z
		.string()
		.min(3, { message: 'First Name should be at least 3 characters' }),
	lastName: z
		.string()
		.min(3, { message: 'Last Name should be at least 3 characters' }),
	email: z.string().email(),
	phone: z.string().length(11),
	gender: z.enum(['male', 'female']),
	address: z
		.string()
		.min(3, { message: 'Address should be at least 3 characters' }),
	city: z.string().optional(),
	state: z
		.string()
		.min(3, { message: 'State should be at least 3 characters' }),
	postcode: z.string().optional(),
	country: z
		.string()
		.min(3, { message: 'State should be at least 3 characters' }),
	method: z.string(),
});

type UserDetails = z.infer<typeof schema>;

const BriefLawyer: React.FC = () => {
	const {
		formState: { errors, isSubmitting, isValid },
		handleSubmit,
		register,
		reset,
		watch,
	} = useForm<UserDetails>({
		mode: 'onChange',
		resolver: zodResolver(schema),
	});

	const toast = useToast();
	const countriesResult = useCountries();
	const statesResult = useStates(watch('country')!);

	const handleSubmitRequest = async (data: UserDetails) => {
		try {
			const result = await resend.sendLawyerRequestEmail<UserDetails>(data);
			if (result.id) {
				reset();
				toast({
					title: 'Success!',
					status: 'success',
				});
			}
		} catch (error) {
			toast({
				title: (error as Error).message,
				status: 'error',
			});
		}
	};

	return (
		<form id="brieflawyer" onSubmit={handleSubmit(handleSubmitRequest)}>
			<Heading
				fontSize="1.2rem"
				fontWeight="500"
				textTransform="capitalize"
				color="gray.50"
			>
				Your matter
			</Heading>

			<Text fontSize="0.875rem" my={2} fontWeight="400" color="gray.50">
				Kindly give us brief details of how we may be of assistance in the box
				below:
			</Text>

			<TextArea
				aria-label="Please describe your matter"
				error={errors.complaint?.message}
				{...register('complaint')}
			/>

			<Heading
				fontSize="1.2rem"
				fontWeight="500"
				textTransform="capitalize"
				color="gray.50"
			>
				Your Information
			</Heading>

			<HStack spacing={3} mt={5}>
				<InputField
					aria-label="First Name *"
					error={errors.firstName?.message}
					{...register('firstName')}
				/>

				<InputField
					aria-label="Last Name *"
					error={errors.lastName?.message}
					{...register('lastName')}
				/>
			</HStack>

			<Box mt={5}>
				<InputField
					aria-label="Email *"
					error={errors.email?.message}
					{...register('email')}
				/>
			</Box>

			<HStack spacing={3} mt={5}>
				<InputField
					aria-label="Telephone *"
					error={errors.phone?.message}
					{...register('phone')}
				/>

				<SelectField
					aria-label="Gender *"
					error={errors.gender?.message}
					options={gender}
					{...register('gender')}
				/>
			</HStack>

			<Divider borderColor="gray.50" my={5} />

			<Heading
				fontSize="1.2rem"
				fontWeight="500"
				textTransform="capitalize"
				color="gray.50"
			>
				Your Address
			</Heading>

			<HStack spacing={3} mt={5}>
				<InputField
					aria-label="Street Address *"
					error={errors.address?.message}
					{...register('address')}
				/>

				<InputField
					aria-label="City"
					error={errors.city?.message}
					{...register('city')}
				/>
			</HStack>

			<Box mt={5}>
				<SelectField
					aria-label="Country *"
					error={errors.country?.message}
					options={countriesResult.data?.countries}
					{...register('country')}
				/>
			</Box>

			<HStack spacing={3} mt={5}>
				<InputField
					aria-label="Postcode"
					error={errors.postcode?.message}
					{...register('postcode')}
				/>

				<SelectField
					aria-label="State *"
					error={errors.state?.message}
					options={statesResult}
					{...register('state')}
				/>
			</HStack>

			<Divider borderColor="gray.50" my={5} />

			<Heading
				fontSize="1.2rem"
				fontWeight="500"
				textTransform="capitalize"
				color="gray.50"
			>
				Contacting you
			</Heading>

			<Text fontSize="0.875rem" mt={2} fontWeight="400" color="gray.50">
				Kindly indicate in the box below how you would like us to contact you
				(e.g. by telephone, and if we can leave a voice message or not, or by
				email) and the best time to reach you.
			</Text>

			<Box mt={5}>
				<SelectField
					aria-label="Preferred Method *"
					error={errors.method?.message}
					options={contactMethods}
					{...register('method')}
				/>
			</Box>

			<Button
				mt={5}
				colorScheme="gray"
				form="brieflawyer"
				isDisabled={!isValid}
				isLoading={isSubmitting}
				type="submit"
			>
				Submit Request
			</Button>
		</form>
	);
};

export default BriefLawyer;
