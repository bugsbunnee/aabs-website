import React from 'react';

import {
	Box,
	Button,
	Heading,
	SimpleGrid,
	Text,
	useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import InputField from './InputField';
import resend from '../services/resend';

const schema = z.object({
	fullName: z
		.string()
		.min(3, { message: 'Full Name should be at least 3 characters' }),
	email: z.string().email(),
});

type NewsLetterUser = z.infer<typeof schema>;

const NewsLetter: React.FC = () => {
	const {
		formState: { errors, isSubmitting, isValid },
		handleSubmit,
		register,
		reset,
	} = useForm<NewsLetterUser>({
		mode: 'onChange',
		resolver: zodResolver(schema),
	});

	const toast = useToast();

	const handleSendNewsletter = async (data: NewsLetterUser) => {
		try {
			const result = await resend.sendNewsletterEmail<NewsLetterUser>(data);
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
		<form id="newsletter" onSubmit={handleSubmit(handleSendNewsletter)}>
			<Heading
				size="md"
				fontSize="1rem"
				fontWeight="500"
				textTransform="uppercase"
				color="gray.50"
				textAlign="center"
			>
				Stay Ahead
			</Heading>

			<Box display="flex" justifyContent="center" mt={2}>
				<Text
					width={{ sm: '100%', md: '70%', lg: '70%' }}
					color="gray.50"
					fontSize="0.875rem"
					size="md"
					textAlign="center"
				>
					Sign up to receive regular updates directly in your email inbox by
					subscribing to our newsletter. Simply complete the form below with
					your information to join.
				</Text>
			</Box>

			<SimpleGrid columns={{ lg: 3, md: 3, sm: 1 }} spacing={3} mt={5}>
				<InputField
					aria-label="Full Name"
					error={errors.fullName?.message}
					{...register('fullName')}
				/>

				<InputField
					aria-label="Email"
					error={errors.email?.message}
					{...register('email')}
				/>

				<Button
					colorScheme="gray"
					form="newsletter"
					isDisabled={!isValid}
					isLoading={isSubmitting}
					type="submit"
				>
					Subscribe
				</Button>
			</SimpleGrid>
		</form>
	);
};

export default NewsLetter;
