import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveSvg from '../../images/responsive.svg';
import CodeSvg from '../../images/code.svg';
import CrossBrowserSvg from '../../images/cross-browser.svg';

const Home = () => (
	<main>
		<div className="jumbotron">
			<h1>Front-end web development</h1>
			<p></p>
		</div>
		<div className="marketing-rows">
			<MarketingRow heading="Responsive web design" image={ResponsiveSvg}>
				See your design come to life.
			</MarketingRow>
			<hr/>
			<MarketingRow heading="Modern front-end technologies and frameworks" image={CodeSvg}>
				<a href="/this-site">Click here</a> to see what technologies were used to build this site.
			</MarketingRow>
			<hr/>
			<MarketingRow heading="Cross-browser testing" image={CrossBrowserSvg}>
				Hello
			</MarketingRow>
		</div>
		<p className="text-muted"><small>Vector graphics designed by <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer">Freepik</a> at Flaticon.</small></p>
	</main>
);

const MarketingRow = (props) => (
	<div className="row">
		<div className="column">
			<img src={props.image}/>
		</div>
		<div className="column">
			<h2>{props.heading}</h2>
			<p>{props.children}</p>
		</div>
	</div>
);

MarketingRow.propTypes = {
	heading: PropTypes.string,
	image: PropTypes.string,
	children: PropTypes.string
}

export default Home;