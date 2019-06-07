import React from 'react';
import styled from 'styled-components';
import { FlexFunc } from './ReusableStyles';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div`
	${FlexFunc('row', 'center', 'none')};
	width: 100%;
	position: fixed;
	height: 44px;
	background-color: #333;
`;

const TopBarContainer = styled.div`
	${FlexFunc('row', 'none', 'none')};
	width: 100%;
	color: #fff;
	letter-spacing: 1px;
	padding: 0 10px;

	@media (min-width: 1280px) {
		width: 1280px;
	}
`;

const TopBarContainerLeft = styled.div`
	${FlexFunc('row', 'none', 'center')};
	flex: 1;
	font-size: 11px;

	span {
		cursor: pointer;
		margin-right: 25%;
		font-weight: bold;
	}
`;

const TopBarContainerCenter = styled.div`
	${FlexFunc('row', 'center', 'center')};
	flex: 3;
	font-size: 9px;

	span {
		cursor: pointer;
		margin-right: 5%;

		&:last-child {
			margin-right: 0;
		}

		&:hover {
			text-decoration: underline;
		}
	}
`;

const TopBarContainerRight = styled.div`
	${FlexFunc('row', 'flex-end', 'center')};
	flex: 1;
	font-size: 11px;
	font-weight: bold;

	span {
		cursor: pointer;
	}
`;

const TopBar = () => {
	return (
		<TopBarDiv>
			<TopBarContainer>
				<TopBarContainerLeft>
					<span>TOPICS</span>
					<span>SEARCH</span>
				</TopBarContainerLeft>
				<TopBarContainerCenter>
					<span>GENERAL</span>
					<span>BROWNBAG</span>
					<span>RANDOM</span>
					<span>MUSIC</span>
					<span>ANNOUNCEMENTS</span>
				</TopBarContainerCenter>
				<TopBarContainerRight>
					<span>LOG IN</span>
				</TopBarContainerRight>
			</TopBarContainer>
		</TopBarDiv>
	);
};

export default TopBar;
