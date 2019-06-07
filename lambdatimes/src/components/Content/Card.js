import React from 'react';
import pt from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} alt={props.author}/>
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.pt = {
  headline: pt.string.isRequired,
  img: pt.string.isRequired,
  author: pt.string.isRequired,
}

export default Card;
