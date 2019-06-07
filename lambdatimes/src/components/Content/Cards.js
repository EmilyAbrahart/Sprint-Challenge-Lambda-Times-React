import React, { Component } from 'react';
import Card from './Card';
import pt from 'prop-types'

const Cards = props => {
	return (
		<div className="cards-container">
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
		</div>
	);
};

// Make sure you include prop types for all of your incoming props
Cards.pt= {
  cards: pt.arrayOf(pt.object).isRequired,
}
export default Cards;
