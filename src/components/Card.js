import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => (
	<div className="column">
		<div className="card">
			<div className="card-body">
				<h2 className="card-title">{props.heading}</h2>
				{props.children}
			</div>
		</div>
	</div>
);

Card.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.object
}

export default Card;