import React from 'react';
import { HStack, Stack, Text, Textarea, TextareaProps } from '@chakra-ui/react';

interface Props extends TextareaProps {
	error?: string;
}

const TextArea = React.forwardRef<HTMLInputElement, Props>(
	({ error, ...otherProps }, ref) => {
		return (
			<Stack spacing={2}>
				<Textarea
					{...otherProps}
					ref={ref}
					errorBorderColor="error.100"
					isInvalid={!!error}
					bg="white"
					borderRadius={5}
					fontSize="small"
					variant="outline"
					placeholder={otherProps['aria-label']}
				/>

				<HStack justifyContent="flex-end" mt="0.5rem">
					{otherProps.value ? (
						<Text fontSize="sm" fontWeight="600">
							{otherProps.value.toString().length}
						</Text>
					) : null}

					{otherProps.maxLength ? (
						<>
							<Text fontSize="sm" fontWeight="600">
								/
							</Text>
							<Text fontSize="sm" fontWeight="600">
								{otherProps.maxLength}
							</Text>
						</>
					) : null}
				</HStack>

				{error ? (
					<Text
						color="error.100"
						fontSize="sm"
						fontWeight="600"
						textTransform="capitalize"
					>
						{error}:
					</Text>
				) : null}
			</Stack>
		);
	}
);

export default TextArea;
