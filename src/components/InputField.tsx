import React from 'react';
import { Input, InputGroup, InputProps, Stack, Text } from '@chakra-ui/react';

interface Props extends InputProps {
	error?: string;
}

const InputField = React.forwardRef<HTMLInputElement, Props>(
	({ error, ...otherProps }, ref) => {
		return (
			<Stack spacing={2} width="100%">
				<InputGroup>
					<Input
						{...otherProps}
						id={otherProps.name}
						ref={ref}
						isInvalid={!!error}
						placeholder={otherProps['aria-label']}
						fontSize="small"
						borderRadius={5}
						errorBorderColor="error.100"
						variant="outline"
						bg="white"
						colorScheme="gray"
						_disabled={{ opacity: 0.5 }}
					/>
				</InputGroup>

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

export default InputField;
