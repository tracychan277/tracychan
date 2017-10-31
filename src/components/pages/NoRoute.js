import React from 'react';

const NoRoute = () => (
	<main>
		<div className="alert alert-warning">
			<span className="badge badge-warning">Whoops!</span> This page could not be found. <a href="/" className="alert-link">Click here</a> to go back to the homepage.
		</div>
	</main>
);

export default NoRoute;