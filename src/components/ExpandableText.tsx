import React, { useState } from 'react';
import { Button, Text, TextProps } from '@chakra-ui/react';

interface Props extends TextProps {
	children: string;
	limit?: number;
}

const ExpandableText: React.FC<Props> = ({
	children,
	limit = 200,
	...textProps
}) => {
	const [expanded, setExpanded] = useState(false);

	if (!children) return null;
	if (children.length <= limit) return <Text>{children}</Text>;

	const summary = expanded ? children : children.substring(0, limit) + '...';

	return (
		<Text {...textProps}>
			{summary}
			<Button
				size="xs"
				marginLeft={1}
				fontWeight="bold"
				colorScheme="yellow"
				onClick={() => setExpanded(!expanded)}
			>
				{expanded ? 'Show Less' : 'Read More'}
			</Button>
		</Text>
	);
};

export default ExpandableText;
