import React from 'react';
import PropTypes from 'prop-types';

const DevIcon = (props) => (
	<i className={'devicon-' + props.name}></i>
);

DevIcon.propTypes = {
	name: PropTypes.string.isRequired
}

export default DevIcon;
