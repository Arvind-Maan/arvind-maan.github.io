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

const App = () => {
	return (
		//margins are top right bottom left
		<StyledApp className="App">
			<Square
				size="600px"
				colour="#2d3142"
				title="ARVIND MAAN"
				side="left"
				margins="-400px 0px 0px -450px"
				zIndex="1"
			/>
			<Square
				size="300px"
				colour="#4f5d75"
				title="PROJ ECTS"
				side="right"
				margins="-300px 0px 0px 125px"
				zIndex="0"
			/>
			<Square
				size="300px"
				colour="#ef8354"
				title="BLOG"
				side="right"
				margins="0px 0px 0px 125px"
				zIndex="0"
			/>
		</StyledApp>
	);
};

export default App;
