import React from 'react';

const NoRoute = () => (
	<main>
		<h1 className="no-route"><span>404</span> Not Found</h1>
		<p className="no-route">The page &quot;{window.location.pathname}&quot; could not be found or does not exist. <a href="/">Click here</a> to go back to the homepage.</p>
	</main>
);

export default NoRoute;