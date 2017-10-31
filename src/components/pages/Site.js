import React from 'react';
import {FaGithub} from 'react-icons/lib/fa';

const Site = () => (
	<main>
		<h1>This Site</h1>
		<p>You can view the source code for this site at <a href="https://github.com/tracychan277/tracychan" rel="noopener noreferrer" target="_blank"><FaGithub/> GitHub</a>. This static site is hosted on an AWS S3 bucket and served through CloudFront.</p>
		<h2>Development Tools</h2>
		<DevTools/>
		<h2>Frontend Libraries</h2>
		<Frontend/>
	</main>
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
	</dl>
);

export default Site;