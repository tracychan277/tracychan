import React from 'react';
import PropTypes from 'prop-types';
import DevIcon from '../DevIcon';
import timelineEvents from '../../timelineEvents.json';

const About = () => (
	<main>
		<div className="jumbotron">
			<h1>About Me</h1>
			<p>I was interested in web design and development as a teenager, pretty much as soon as I had access to the internet, and managed to turn my hobby into a profession.</p>
		</div>
		<h2>Professional development journey</h2>
		<Timeline events={timelineEvents}/>
	</main>
);

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

export default About;
