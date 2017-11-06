import React from 'react';
import {FaLinkedinSquare, FaEnvelope} from 'react-icons/lib/fa';

const Contact = () => (
	<main>
		<h1>Contact</h1>
		<p>I am currently based in Melbourne, Australia but am interested in international relocation.</p>
		<p>For work-related enquiries, please contact me through LinkedIn, or send me an email.</p>
		<ul className="contact-list">
			<li>
				<a href="https://www.linkedin.com/in/tracy-chan-8584b6b4/" rel="noopener noreferrer" target="_blank"><FaLinkedinSquare/> tracy-chan-8584b6b4</a>
			</li>
			<li>
				<a href="mailto:hello@tracychan.me"><FaEnvelope/> hello@tracychan.me</a>
			</li>
		</ul>
	</main>
);

export default Contact;