import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FaGithub} from 'react-icons/lib/fa';
import Card from '../Card';
import DevIcon from '../DevIcon';
import DataList from '../DataList';

export default class Site extends Component {
	iconNames = [
		'amazonwebservices-original',
		'webpack-plain',
		'babel-plain',
		'react-original',
		'sass-original',
		'bootstrap-plain'
	];

	devtoolsList = [
		['npm', 'Used to manage all JavaScript packages and dependencies.'],
		['webpack', 'Runs a development server on Express.js and automates building production-ready assets.'],
		['Babel', 'Used to transpile JSX into regular JavaScript and allow ES6+ syntax to be used in code.'],
		['ESLint', 'JavaScript linter for detecting code style issues.']
	];

	frontendList = [
		['React', 'Component-based JavaScript library for building reactive user interfaces.'],
		['React Router', 'Provides client-side routing functionality for single page applications in React.'],
		['Bootstrap', 'A mobile-first responsive frontend library that is dependent on jQuery and Popper.js.'],
		['React Icons', 'An interface for importing SVG icons from the most popular icon font libraries into React.'],
		['Devicon', 'Icon font for programming languages and development tools.']
	];

	render() {
		return (
			<main>
				<Jumbotron iconNames={this.iconNames}/>
				<div className="row">
					<Card heading="Development Tools">
						<DataList list={this.devtoolsList}/>
					</Card>
					<Card heading="Frontend Libraries">
						<DataList list={this.frontendList}/>
					</Card>
				</div>
			</main>
		);
	}
}

const Jumbotron = (props) => (
	<div className="jumbotron">
		<h1>This Site</h1>
		<DevIcons iconNames={props.iconNames}/>
		<p>You can view the source code for this site at <a href="https://github.com/tracychan277/tracychan" rel="noopener noreferrer" target="_blank"><FaGithub/> GitHub</a>. This static site is hosted on an AWS S3 bucket and served through CloudFront.</p>
	</div>
);

Jumbotron.propTypes = {
	iconNames: PropTypes.array
}

const DevIcons = (props) => (
	<ul className="dev-icons">
		{
			props.iconNames.map((iconName) => {
				return <li key={iconName}><DevIcon name={iconName}/></li>
			})
		}
	</ul>
)

DevIcons.propTypes = {
	iconNames: PropTypes.array
}