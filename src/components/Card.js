import React from 'react';
import PropTypes from 'prop-types';

const Card = ({heading, children}) => (
	<div className="column">
		<div className="card">
			<div className="card-body">
				<h2 className="card-title">{heading}</h2>
				{children}
			</div>
		</div>
	</div>
);

Card.propTypes = {
	heading: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default Card;
