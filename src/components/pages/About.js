import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DevIcon from '../Devicon';

export default class About extends Component {
	timelineEvents = [
		{
			year: '2005',
			duration: '3 years',
			icons: [
				'html5-plain',
				'css3-plain',
				'photoshop-plain'
			],
			description: 'Amateur web design and development as a hobby. Self-taught basic HTML, CSS, JavaScript, and image creation/editing in Adobe Photoshop.'
		},
		{
			year: '2008',
			duration: '2.5 years',
			description: 'Part-time/casual retail work experience at a small confectionery store and large supermarket.'
		},
		{
			year: '2011',
			duration: '5 years',
			icons: [
				'java-plain',
				'oracle-original',
				'vim-plain'
			],
			description: 'Formal programming and web development studies at university graduating with a Bachelor of Information Technology and Systems/Bachelor of Arts double degree.'
		},
		{
			year: '2015',
			duration: '8 months',
			icons: [
				'oracle-original'
			],
			description: 'Internship working in the government doing data fixes in Oracle SQL and proprietary SAS programming language.'
		},
		{
			year: '2015 - 2016',
			duration: '8 months',
			icons: [
				'sourcetree-original',
				'apache-plain',
				'mysql-plain',
				'bootstrap-plain'
			],
			description: 'Small business client website project built in CakePHP and Bootstrap involving all phases of the SDLC from conception to delivery.'
		},
		{
			year: '2016',
			duration: '1.5 years',
			icons: [
				'ubuntu-plain',
				'phpstorm-plain',
				'git-plain',
				'amazonwebservices-original',
				'nginx-original', 'php-plain',
				'jquery-plain',
				'sass-original'
			],
			description: 'Professional full-stack web-development experience working at an eCommerce web development agency specialising in Magento.'
		},
		{
			year: '2017 - present',
			icons: [
				'github-original',
				'webpack-plain',
				'babel-plain',
				'react-original'
			],
			description: 'Exploring modern front-end development technologies and frameworks, in particular React, and seeking an exciting new role in front-end development.'
		}
	];

	render() {
		return (
			<main>
				<div className="jumbotron">
					<h1>About Me</h1>
					<p>I was interested in web design and development as a teenager, pretty much as soon as I had access to the internet, and managed to turn my hobby into a profession.</p>
				</div>
				<h2>Professional development journey</h2>
				<Timeline events={this.timelineEvents}/>
			</main>
		);
	}
}

const Timeline = (props) => (
	<ul className="timeline">
		{
			props.events.map((event) => {
				return (
					<Event key={event.year} year={event.year} icons={event.icons}>
						{event.description}
						</Event>
					)
			})
		}
	</ul>
);

Timeline.propTypes = {
	events: PropTypes.array
}

const Event = (props) => (
	<li>
		<h3>{props.year}</h3>
		{props.duration ? <p>{props.duration}</p> : null}
		<p>
			{
				props.icons ?
				props.icons.map((name) => {
					return <DevIcon key={name} name={name}/>
				}) : null
			}
		</p>
		<p>{props.children}</p>
	</li>
);

Event.propTypes = {
	year: PropTypes.string,
	duration: PropTypes.string,
	icons: PropTypes.array,
	children: PropTypes.string
}
