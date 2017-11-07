import React from 'react';
import {FaGithub} from 'react-icons/lib/fa';
import Card from '../Card';
import DevIconList from '../DevIconList';
import DataList from '../DataList';

const devtoolsList = {
	'npm': 'Used to manage all JavaScript packages and dependencies.',
	'webpack': 'Runs a development server on Express.js and automates building production-ready assets.',
	'Babel': 'Used to transpile JSX into regular JavaScript and allow ES6+ syntax to be used in code.',
	'ESLint': 'JavaScript linter for detecting code style issues.'
};

const frontendList = {
	'React': 'Component-based JavaScript library for building reactive user interfaces.',
	'React Router': 'Provides client-side routing functionality for single page applications in React.',
	'Bootstrap': 'A mobile-first responsive frontend library that is dependent on jQuery and Popper.js.',
	'React Icons': 'An interface for importing SVG icons from the most popular icon font libraries into React.',
	'Devicon': 'Icon font for programming languages and development tools.'
};

const Site = () => (
	<main>
		<Jumbotron/>
		<div className="row">
			<Card heading="Development Tools">
				<DataList list={devtoolsList}/>
			</Card>
			<Card heading="Frontend Libraries">
				<DataList list={frontendList}/>
			</Card>
		</div>
	</main>
);

const iconNames = [
	'amazonwebservices-original',
	'webpack-original',
	'babel-original',
	'react-original',
	'sass-original',
	'bootstrap-plain'
];

const Jumbotron = () => (
	<div className="jumbotron">
		<h1>This Site</h1>
		<DevIconList iconNames={iconNames}/>
		<p>You can view the source code for this site at <a href="https://github.com/tracychan277/tracychan" rel="noopener noreferrer" target="_blank"><FaGithub/> GitHub</a>. This static site is hosted on an AWS S3 bucket and served through CloudFront.</p>
	</div>
);

export default Site;