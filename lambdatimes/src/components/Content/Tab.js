import React from 'react';
import pt from 'prop-types';
import styled from 'styled-components';
import { FlexFunc } from './../ReusableStyles';

const TabDiv = styled.div`
	${FlexFunc('row', 'none', 'center')};
	color: #fff;
	background-color: #333;
	margin: 0 5px;
	padding: 2px 10px;
	font-size: 12px;
	letter-spacing: 2px;
	cursor: pointer;
	font-weight: bold;

	&:hover {
		text-decoration: underline;
	}

	.active-tab {
		background-color: #fff;
		color: #333;
		border: 2px solid #333;
	}
`;

const Tab = props => {
	/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

	return (
		<TabDiv
			className={`tab ${props.selectedTab === props.tab ? 'active-tab' : ''}`}
			onClick={() => {
				/* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
				props.selectTabHandler(props.tab);
			}}
		>
			{props.tab.toUpperCase()}
		</TabDiv>
	);
};

// Make sure you include PropTypes on your props.
Tab.pt = {
	tab: pt.string.isRequired,
	selectedTab: pt.string.isRequired,
	selectTabHandler: pt.func.isRequired
};

export default Tab;
