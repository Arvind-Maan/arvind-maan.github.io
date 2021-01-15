import React from 'react';
import styled from 'styled-components';
import { multiplyCss } from '../utils/cssMath';
const StyledText = styled.h1`
	font-family: 'Fira Sans', sans-serif;
	font-size: ${(props) => props.size};
	text-align: ${(props) => props.align};
	margin: ${(props) => offset(props.align)};
	color: rgba(0, 0, 0, 0.8);
`;

const offset = (align) => {
	if (align === 'left') {
		return '0px 0px 50px 200px';
	} else {
		return '0px 300px 75px 0px';
	}
};

const BlockText = ({ size, align, bg, children }) => {
	return (
		<StyledText size={size} align={align} bg={bg}>
			{children}
		</StyledText>
	);
};

export default BlockText;
