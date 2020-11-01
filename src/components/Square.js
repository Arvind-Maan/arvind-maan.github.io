import React from 'react';
import styled, { keyframes } from 'styled-components';

import { multiplyCss } from '../utils/cssMath';

const StyledSquare = styled.div`
	height: ${(props) => props.size};
	width: ${(props) => props.size};
	background: ${(props) => props.colour};
	margin: ${(props) => props.margins};
	overflow: visible;

	transition: 0.5s;

	//on hover expand
	&:hover {
		padding: ${(props) => expandSquare(props.side)};
		height: ${(props) => multiplyCss(props.size, 1.1)};
		width: ${(props) => multiplyCss(props.size, 1.1)};
		transition: 0.5s;
	}
`;

const expandSquare = (side) => {
	//padding: top right bottom left
	if (side === 'left') {
		return '0px 0px 20% 20%';
	} else if (side === 'right') {
		return '20% 20% 0px 0px';
	}
	return '0px 0px 0px 0px';
};
const Square = ({ title, size, colour, side, margins }) => {
	return (
		<StyledSquare size={size} colour={colour} side={side} margins={margins}>
			{title}
		</StyledSquare>
	);
};

export default Square;
