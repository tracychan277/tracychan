import React from 'react';

const About = () => (
	<main>
		<div className="jumbotron">
			<h1>About Me</h1>
			<p>I was interested in web design and development pretty much as soon as I had access to the internet, and self-taught myself HTML and CSS from the age of 13.</p>
		</div>
		<h2>Professional development journey</h2>
		<Timeline/>
	</main>
);

const Timeline = () => (
	<ul className="timeline">
		<li>
			<h3>2005</h3>
			<p>3 years</p>
			<p>Amateur web design and development as a hobby. Self-taught basic HTML, CSS, JavaScript, and image creation/editing in Adobe Photoshop.</p>
		</li>
		<li>
			<h3>2008</h3>
			<p>2.5 years</p>
			<p>Part-time/casual retail work experience at a small confectionery store and large supermarket.</p>
		</li>
		<li>
			<h3>2011</h3>
			<p>5 years</p>
			<p>Formal programming and web development studies at university graduating with a Bachelor of Information Technology and Systems/Bachelor of Arts double degree.</p>
		</li>
		<li>
			<h3>2015</h3>
			<p>8 months</p>
			<p>Internship working in the government doing data fixes in Oracle SQL and proprietary SAS programming language.</p>
		</li>
		<li>
			<h3>2015 - 2016</h3>
			<p>8 months</p>
			<p>Small business client website project built in CakePHP involving all phases of the SDLC from conception to delivery.</p>
		</li>
		<li>
			<h3>2016</h3>
			<p>1.5 years</p>
			<p>Professional full-stack web-development experience working in at an eCommerce web development agency specialising in Magento.</p>
		</li>
		<li>
			<h3>2017 - present</h3>
			<p>Exploring modern front-end development technologies and frameworks, in particular React, and seeking an exciting new role in front-end development.</p>
		</li>
	</ul>
);

export default About;