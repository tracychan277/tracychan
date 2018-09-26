import React from 'react';
import PropTypes from 'prop-types';
import DevIcon from './DevIcon';

const DevIconList = ({iconNames}) => (
	<ul className="dev-icons">
		{
			iconNames.map((iconName) => {
				return <li key={iconName}><DevIcon name={iconName}/></li>
			})
		}
	</ul>
);

DevIconList.propTypes = {
	iconNames: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default DevIconList;
