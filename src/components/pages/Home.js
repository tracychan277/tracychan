import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveSvg from '../../images/responsive.svg';
import CodeSvg from '../../images/code.svg';
import CrossBrowserSvg from '../../images/cross-browser.svg';
import DevIconList from '../DevIconList';

const Home = () => (
	<main>
		<div className="jumbotron">
			<h1>Front-end web development</h1>
			<p>I am a frontend web developer that is also comfortable working with the full stack. I am
			passionate about delivering the best user web experience and getting the small details right.
			<a href="/about-me">Click here</a> to read more about my professional development journey.</p>
		</div>
		<div className="marketing-rows">
			<MarketingRow heading="Responsive web design" image={ResponsiveSvg}>
				<p>See your design come to life.</p>
				<p>I specialise in converting a design into a fully functional website that performs
				consistently across different devices and screen sizes.</p>
				<p>Previous responsive redesign projects saw a 50% conversion rate on mobile for a previously
				unresponsive desktop-centric website according to Google Analytics tracking.</p>
			</MarketingRow>
			<hr/>
			<MarketingRow heading="Modern front-end technologies and frameworks" image={CodeSvg}>
				<p>As a perfectionist, I am constantly striving for self-improvement, and this includes
				keeping up-to-date with the latest technologies and coding standards. I ensure that my code
				is written to scale and loosely-coupled enough to be reusable.</p>
				<p><a href="/this-site">Click here</a> to see what technologies and frameworks were used to
				build this site.</p>
			</MarketingRow>
			<hr/>
			<MarketingRow heading="Cross-browser testing" image={CrossBrowserSvg}>
				<p>I test all websites I develop in the most popular browsers and operating systems.</p>
				<DevIconList iconNames={['safari-original', 'chrome-original', 'firefox-original', 'ie10-original']}/>
				<DevIconList iconNames={['android-plain', 'apple-original', 'ubuntu-plain', 'windows8-original']}/>
			</MarketingRow>
		</div>
		<p className="text-muted"><small>Vector graphics designed by
		<a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer">
			Freepik
		</a> at Flaticon.</small></p>
		<div className="jumbotron">
			<h3>Like what you see?</h3>
			<p>I am not currently open to job offers, but feel free to reach out to me for networking
			purposes.</p>
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
	heading: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default Home;
