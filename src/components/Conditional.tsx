import React from 'react';

interface ConditionalProps {
	children: React.ReactNode | React.ReactNode[];
	isVisible: boolean;
}

const Conditional: React.FC<ConditionalProps> = ({ children, isVisible }) => {
	return isVisible ? children : null;
};

export default Conditional;
