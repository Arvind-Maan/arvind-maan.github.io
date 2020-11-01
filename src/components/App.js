import React from 'react';
import styled from 'styled-components';
import Square from './Square.js';

const StyledApp = styled.div`
	background: #ffffff;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SquareContainer = styled.div`
	height: 600px;
	width: 600px;
	display: flex;
	position: absolute;
	flex-direction: ${(props) => props.dir};
`;

const SingleContainer = styled.div`
	height: 80%;
	width: 100%;
	z-index: 1;
`;
const InternalContainer = styled.div`
	display: flex;
	flex-direction: ${(props) => props.dir};
	height: 100%;
	width: 80%;
`;

const App = () => {
	return (
		<StyledApp className="App">
			<SquareContainer dir="row">
				<Square
					size="100%"
					colour="#14213d"
					title="Blue"
					side="left"
					margins="20% 0px 0px 0px"
				/>
				<InternalContainer dir="column">
					<Square size="100%" colour="#fca311" title="Orange" side="right" />
					<Square size="100%" colour="#e5e5e5" title="Grey" side="right" />
				</InternalContainer>
			</SquareContainer>
		</StyledApp>
	);
};

export default App;
