import React from 'react';
import { Select, SelectProps, Stack, Text } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import { Option } from '../models';

interface Props extends SelectProps {
	error?: string;
	options: Option[];
}

const SelectField = React.forwardRef<HTMLInputElement, Props>(
	({ error, options, ...otherProps }, ref) => {
		return (
			<Stack spacing={2} width="100%">
				<Select
					{...otherProps}
					colorScheme="gray"
					icon={<FaChevronDown color="gray" size={20} />}
					id={otherProps.name}
					ref={ref}
					isInvalid={!!error}
					fontSize="small"
					placeholder={otherProps['aria-label']}
					borderRadius={5}
					errorBorderColor="error.100"
					variant="outline"
					bg="white"
					_disabled={{ opacity: 0.5 }}
				>
					{options.map((option) => (
						<option key={option.id} value={option.id}>
							{option.name}
						</option>
					))}
				</Select>

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

export default SelectField;
