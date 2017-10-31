import React from 'react';
import PropTypes from 'prop-types';

const DevIcon = (props) => (
	<i className={'devicon-' + props.name + ' colored'}></i>
);

DevIcon.propTypes = {
	name: PropTypes.string
}

export default DevIcon;