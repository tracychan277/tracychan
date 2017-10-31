import React from 'react';
import PropTypes from 'prop-types';

const DataList = (props) => (
	<dl>
		{
			Object.keys(props.list).map((title) => {
				return (
					<span key={title}>
						<dt>{title}</dt>
						<dd>{props.list[title]}</dd>
					</span>
				)
			})
		}
	</dl>
);

DataList.propTypes = {
	list: PropTypes.object
}

export default DataList;