import React from 'react';
import PropTypes from 'prop-types';
import DevIcon from './DevIcon';

const DevIconList = (props) => (
	<ul className="dev-icons">
		{
			props.iconNames.map((iconName) => {
				return <li key={iconName}><DevIcon name={iconName}/></li>
			})
		}
	</ul>
);

DevIconList.propTypes = {
	iconNames: PropTypes.array
}

export default DevIconList;