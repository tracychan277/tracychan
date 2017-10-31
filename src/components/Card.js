import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => (
	<div className="card">
		<div className="card-body">
			<h2>{props.heading}</h2>
			{props.children}
		</div>
	</div>
);

Card.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.object
}

export default Card;