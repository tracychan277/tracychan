import React from 'react';
import PropTypes from 'prop-types';
import DevIcon from '../DevIcon';
import Card from '../Card';
import {FaLinkedinSquare} from 'react-icons/lib/fa';
import timelineEvents from '../../timelineEvents.json';

const About = () => (
	<main>
		<div className="jumbotron">
			<h1>About Me</h1>
			<p>I was interested in web design and development as a teenager, pretty much as soon as I had access to the internet, and managed to turn my hobby into a profession. For more information about my education and work experience, see my <a href="https://www.linkedin.com/in/tracy-chan-8584b6b4/" rel="noopener noreferrer" target="_blank"><FaLinkedinSquare/> LinkedIn</a> profile.</p>
		</div>
		<Timeline events={timelineEvents}/>
	</main>
);

const Timeline = ({events}) => (
	<ul className="timeline">
		{
			events.map(({year, duration, icons, description}) => {
				return (
					<Event key={year}
						year={year}
						duration={duration}
						icons={icons}
					>
						{description}
					</Event>
				)
			})
		}
	</ul>
);

Timeline.propTypes = {
	events: PropTypes.arrayOf(
		PropTypes.exact({
			year: PropTypes.string.isRequired,
			duration: PropTypes.string,
			icons: PropTypes.arrayOf(PropTypes.string),
			description: PropTypes.string.isRequired,
		}).isRequired
	).isRequired
}

const Event = ({year, duration, children, icons}) => (
	<li>
		<Card heading={year}>
			<div className="event">
				{duration ? <p className="duration">{duration}</p> : null}
				<p className="description">{children}</p>
				<p className="icons">
					{
						icons ?
						icons.map((name) => {
							return <DevIcon key={name} name={name}/>
						}) : null
					}
				</p>
			</div>
		</Card>
	</li>
);

Event.propTypes = {
	year: PropTypes.string.isRequired,
	duration: PropTypes.string,
	icons: PropTypes.arrayOf(PropTypes.string),
	children: PropTypes.string.isRequired
}

export default About;
