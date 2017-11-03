import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveSvg from '../../images/responsive.svg';
import CodeSvg from '../../images/code.svg';
import CrossBrowserSvg from '../../images/cross-browser.svg';

const Home = () => (
	<main>
		<div className="jumbotron">
			<h1>Front-end web development</h1>
			<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
			<p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
		</div>
		<div className="marketing-rows">
			<MarketingRow heading="Responsive web design" image={ResponsiveSvg}>
				Maecenas sed diam eget risus varius blandit sit amet non magna.
			</MarketingRow>
			<MarketingRow heading="Modern front-end technologies and frameworks" image={CodeSvg}>
				Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
			</MarketingRow>
			<MarketingRow heading="Cross-browser testing" image={CrossBrowserSvg}>
				Hello
			</MarketingRow>
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