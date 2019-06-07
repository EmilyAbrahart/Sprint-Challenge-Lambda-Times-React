import React from 'react';
import pt from 'prop-types';
import styled from 'styled-components';
import { FlexFunc } from './../ReusableStyles';

const CardDiv = styled.div`
	${FlexFunc('column', 'space-between', 'none')}
	border-bottom: 1px solid lightgrey;

	background-color: #fff;
	width: 380px;
	margin-bottom: 16px;
	padding: 24px;
`;
const CardHeadline = styled.div`
	font-size: 25px;
	font-family: Didot, serif;
`;

const CardAuthor = styled.div`
	${FlexFunc('row', 'none', 'center')};
	margin-top: 15px;

	span {
		padding-left: 10px;
		font-size: 12px;
		letter-spacing: 1px;
		font-weight: bold;
	}
`;
const CardImgContainer = styled.div`
	padding-right: 10px;
	border-right: 1px solid lightgrey;
	height: 40px;

	img {
		width: 40px;
	}
`;

const Card = props => {
	return (
		<CardDiv>
			<CardHeadline>{props.headline}</CardHeadline>
			<CardAuthor>
				<CardImgContainer>
					<img src={props.img} alt={props.author} />
				</CardImgContainer>
				<span>By {props.author}</span>
			</CardAuthor>
		</CardDiv>
	);
};

// Make sure to include PropTypes.
Card.pt = {
	headline: pt.string.isRequired,
	img: pt.string.isRequired,
	author: pt.string.isRequired
};

export default Card;
