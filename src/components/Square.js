import React from 'react';
import styled, { keyframes } from 'styled-components';

import { subtractCss, addCss } from '../utils/cssMath';
import BlockText from './BlockText';
import background from '../BGMain.png';
//constants
const growthAmount = 30;

const StyledSquare = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	height: ${(props) => props.size};
	width: ${(props) => props.size};
	background: ${(props) => props.colour};
	margin: ${(props) => props.margins};
	overflow: visible;
	box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
	transition: 0.2s;
	z-index: ${(props) => props.zIndex};
	//on hover expand
	&:hover {
		h1 {
			font-size: ${(props) => addCss(props.fontSize, growthAmount / 2)};
			transition: 0.2s;
		}
		margin: ${(props) => adjustMargins(props.margins)};
		padding: ${() => expandSquare()};
		transition: 0.2s;
		z-index: 100;
	}
`;

const expandSquare = () => {
	return `${growthAmount}px`;
};

const adjustMargins = (margins) => {
	let marginsArr = margins.split(' ');
	marginsArr[0] = subtractCss(marginsArr[0], growthAmount);
	marginsArr[3] = subtractCss(marginsArr[3], growthAmount);
	return marginsArr.join(' ');
};

const Square = ({ title, size, colour, side, margins, zIndex }) => {
	let textMargins = '0px 0px 0px 0px';
	let fontSize = '100px';
	let align = 'left';
	let bg =
		'https://images.unsplash.com/photo-1495954380655-01609180eda3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';
	if (side === 'left') {
		textMargins = '0px 0px 0px 0px';
		fontSize = '175px';
		align = 'right';
		bg = background;
	}

	return (
		<StyledSquare
			size={size}
			colour={colour}
			side={side}
			margins={margins}
			zIndex={zIndex}
			fontSize={fontSize}
		>
			<BlockText size={fontSize} margins={textMargins} align={align} bg={bg}>
				{title}
			</BlockText>
		</StyledSquare>
	);
};

export default Square;
