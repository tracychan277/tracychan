import React from 'react';
import PropTypes from 'prop-types';

const DataList = ({list}) => (
	<dl>
		{
			Object.keys(list).map((title) => {
				return (
					<span key={title}>
						<dt>{title}</dt>
						<dd>{list[title]}</dd>
					</span>
				)
			})
		}
	</dl>
);

DataList.propTypes = {
	list: PropTypes.objectOf(PropTypes.string)
}

export default DataList;
