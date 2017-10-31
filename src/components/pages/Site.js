import React from 'react';
import {FaGithub} from 'react-icons/lib/fa';
import Card from '../Card';

const Site = () => (
	<main>
		<Jumbotron/>
		<div className="row">
			<Card heading="Development Tools"><DevTools/></Card>
			<Card heading="Frontend Libraries"><Frontend/></Card>
		</div>
	</main>
);

const Jumbotron = () => (
	<div className="jumbotron">
		<h1>This Site</h1>
		<DevIcons/>
		<p>You can view the source code for this site at <a href="https://github.com/tracychan277/tracychan" rel="noopener noreferrer" target="_blank"><FaGithub/> GitHub</a>. This static site is hosted on an AWS S3 bucket and served through CloudFront.</p>
	</div>
);

const DevIcons = () => (
	<ul className="dev-icons">
		<li><i className="devicon-amazonwebservices-original colored"></i></li>
		<li><i className="devicon-webpack-plain colored"></i></li>
		<li><i className="devicon-babel-plain colored"></i></li>
		<li><i className="devicon-react-original colored"></i></li>
		<li><i className="devicon-sass-original colored"></i></li>
		<li><i className="devicon-bootstrap-plain colored"></i></li>
	</ul>
);

const DevTools = () => (
	<dl>
		<dt>npm</dt>
		<dd>Used to manage all JavaScript packages and dependencies.</dd>
		<dt>webpack</dt>
		<dd>Runs a development server on Express.js and automates building production-ready assets.</dd>
		<dt>Babel</dt>
		<dd>Used to transpile JSX into regular JavaScript and allow ES6+ syntax to be used in code.</dd>
		<dt>ESLint</dt>
		<dd>JavaScript linter for detecting code style issues.</dd>
	</dl>
);

const Frontend = () => (
	<dl>
		<dt>React</dt>
		<dd>Component-based JavaScript library for building reactive user interfaces.</dd>
		<dt>React Router</dt>
		<dd>Provides client-side routing functionality for single page applications in React.</dd>
		<dt>Bootstrap</dt>
		<dd>A mobile-first responsive frontend library that is dependent on jQuery and Popper.js.</dd>
		<dt>React Icons</dt>
		<dd>An interface for importing SVG icons from the most popular icon font libraries into React.</dd>
		<dt>Devicon</dt>
		<dd>Icon font for programming languages and development tools.</dd>
	</dl>
);

export default Site;