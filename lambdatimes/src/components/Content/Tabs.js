import React from 'react';
import Tab from './Tab';
import pt from 'prop-types';
import styled from 'styled-components';
import { FlexFunc } from './../ReusableStyles';

const TabsDiv = styled.div`
	${FlexFunc('row', 'center', 'center')};
	border-bottom: 1px solid lightgrey;
	width: 100%;
	height: 47px;
	background-color: #fff;

	@media (min-width: 1280px) {
		width: 1280px;
	}
`;

const TabsTopics = styled.div`
	${FlexFunc('row', 'none', 'center')};
`;

const TabsTopicsTitle = styled.span`
	font-size: 12px;
	letter-spacing: 1px;
	font-weight: bold;
`;

const Tabs = props => {
	return (
		<TabsDiv>
			<TabsTopics>
				<TabsTopicsTitle>TRENDING TOPICS:</TabsTopicsTitle>
				{/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
				{props.tabs.map(tab => (
					<Tab
						key={tab}
						selectTabHandler={props.selectTabHandler}
						selectedTab={props.selectedTab}
						tab={tab}
					/>
				))}
			</TabsTopics>
		</TabsDiv>
	);
};

// Make sure to use PropTypes to validate your types!
Tabs.pt = {
	tabs: pt.arrayOf(pt.string).isRequired,
	selectedTab: pt.string.isRequired,
	selectTabHandler: pt.func.isRequired
};
export default Tabs;
