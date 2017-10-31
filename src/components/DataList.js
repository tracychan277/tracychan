import React from 'react';
import PropTypes from 'prop-types';

const DataList = (props) => (
	<dl>
		{
			props.list.map((description, index) => {
				return (
					<span key={index}>
					<dt key={description[0]}>{description[0]}</dt>
					<dd key={description[1]}>{description[1]}</dd>
					</span>
				)
			})
		}
	</dl>
);

DataList.propTypes = {
	list: PropTypes.array
}

export default DataList;