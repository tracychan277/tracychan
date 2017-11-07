import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveSvg from '../../images/responsive.svg';
import CodeSvg from '../../images/code.svg';
import CrossBrowserSvg from '../../images/cross-browser.svg';

const Home = () => (
	<main>
		<div className="jumbotron">
			<h1>Front-end web development</h1>
			<p>I am a full-stack web developer with a love for the frontend. I am passionate about delivering the best user web experience and getting the small details right. <a href="/about-me">Click here</a> to read more about my professional development journey.</p>
		</div>
		<div className="marketing-rows">
			<MarketingRow heading="Responsive web design" image={ResponsiveSvg}>
				<p>See your design come to life.</p>
				<p>I specialise in converting a design into a fully functional website that performs consistently across different devices and screen sizes.</p>
				<p>Previous responsive redesign projects saw a 50% conversion rate on mobile for a previously unresponsive desktop-centric website according to Google Analytics tracking.</p>
			</MarketingRow>
			<hr/>
			<MarketingRow heading="Modern front-end technologies and frameworks" image={CodeSvg}>
				<p><a href="/this-site">Click here</a> to see what technologies were used to build this site.</p>
			</MarketingRow>
			<hr/>
			<MarketingRow heading="Cross-browser testing" image={CrossBrowserSvg}>
				<p>Hello</p>
			</MarketingRow>
		</div>
		<p className="text-muted"><small>Vector graphics designed by <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer">Freepik</a> at Flaticon.</small></p>
		<div className="jumbotron">
			<h3>Like what you see?</h3>
			<p>I am open to contract and full-time front-end development opportunities. Feel free to contact me for a chat.</p>
			<a className="btn btn-success btn-lg" href="/contact">Get in touch</a>
		</div>
	</main>
);

const MarketingRow = (props) => (
	<div className="row">
		<div className="column">
			<img src={props.image}/>
		</div>
		<div className="column">
			<h2>{props.heading}</h2>
			{props.children}
		</div>
	</div>
);

MarketingRow.propTypes = {
	heading: PropTypes.string,
	image: PropTypes.string,
	children: PropTypes.string
}

export default Home;