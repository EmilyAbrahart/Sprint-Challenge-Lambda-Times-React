import React from 'react';
import pt from 'prop-types'

const Tab = props => {
	/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
	const isActiveTab = () => {
		return props.selectedTab === props.tab ? 'active-tab' : null;
	};

	return (
		<div
			className={`tab ${isActiveTab}`}
			onClick={() => {
				/* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
				props.selectTabHandler(props.tab);
			}}
		>
			{props.tab.toUpperCase()}
		</div>
	);
};

// Make sure you include PropTypes on your props.
Tab.pt = {
	tab: pt.string.isRequired,
	selectedTab: pt.string.isRequired,
	selectTabHandler: pt.func.isRequired
};

export default Tab;
