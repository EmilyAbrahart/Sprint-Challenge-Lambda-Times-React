import React, { Component } from 'react';
import Card from './Card';
import pt from 'prop-types';
import styled from 'styled-components';
import { FlexFunc } from './../ReusableStyles';

const CardsContainer = styled.div`
	${FlexFunc('row', 'space-evenly', 'none')};
	width: 100%;
	margin-top: 16px;
	flex-wrap: wrap;

	@media (min-width: 1200px) {
		width: 1200px;
	}
`;

const Cards = props => {
	return (
		<CardsContainer>
			{/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
			{props.cards.map((card, index) => (
				<Card
					key={index}
					img={card.img}
					headline={card.headline}
					author={card.author}
				/>
			))}
		</CardsContainer>
	);
};

// Make sure you include prop types for all of your incoming props
Cards.pt = {
	cards: pt.arrayOf(pt.object).isRequired
};
export default Cards;
