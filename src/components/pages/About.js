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

const Timeline = (props) => (
	<ul className="timeline">
		{
			props.events.map((event) => {
				return (
					<Event key={event.year}
						year={event.year}
						duration={event.duration}
						icons={event.icons}
					>
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
		<Card heading={props.year}>
			<div className="event">
				{props.duration ? <p className="duration">{props.duration}</p> : null}
				<p className="description">{props.children}</p>
				<p className="icons">
					{
						props.icons ?
						props.icons.map((name) => {
							return <DevIcon key={name} name={name}/>
						}) : null
					}
				</p>
			</div>
		</Card>
	</li>
);

Event.propTypes = {
	year: PropTypes.string,
	duration: PropTypes.string,
	icons: PropTypes.array,
	children: PropTypes.string
}

export default About;
