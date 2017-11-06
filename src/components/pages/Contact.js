import React from 'react';
import {FaLinkedinSquare, FaEnvelope} from 'react-icons/lib/fa';

const Contact = () => (
	<main>
		<h1>Contact</h1>
		<p>I am currently based in Melbourne, Australia but am interested in international relocation.</p>
		<p>For work-related enquiries, please contact me through LinkedIn, or send me an email. Alternatively, the form below will also send a message to my email address.</p>
		<ul className="contact-list">
			<li>
				<a href="https://www.linkedin.com/in/tracy-chan-8584b6b4/" rel="noopener noreferrer" target="_blank"><FaLinkedinSquare/> tracy-chan-8584b6b4</a>
			</li>
			<li>
				<a href="mailto:hello@tracychan.me"><FaEnvelope/> hello@tracychan.me</a>
			</li>
		</ul>
		<ContactForm/>
	</main>
);

const ContactForm = () => (
	<form acceptCharset="UTF-8"
		autoComplete="off"
		encType="multipart/htmlForm-data"
		method="post"
		noValidate
		action="https://tracychan277.wufoo.com/forms/z19hxi9t0im2hbm/"
	>
		<div className="form-group">
			<div className="row">
				<div className="col">
					<input id="first-name"
						name="Field1"
						type="text"
						className="form-control"
						tabIndex="1"
						placeholder="First Name"/>
				</div>
				<div className="col">
					<input id="last-name"
						name="Field2"
						type="text"
						className="form-control"
						tabIndex="2"
						placeholder="Surname"/>
				</div>
			</div>
		</div>
		<div className="form-group">
			<div className="input-group">
				<div className="input-group-addon">@</div>
				<input id="email"
					name="Field3"
					type="email"
					spellCheck="false"
					className="form-control"
					maxLength="255"
					tabIndex="3"
					placeholder="Email Address"/>
			</div>
		</div>
		<div className="form-group">
			<textarea id="message"
				name="Field4"
				className="form-control"
				spellCheck="true"
				rows="10" cols="50"
				tabIndex="4"
				placeholder="Type your message here..."
			></textarea>
		</div>
		<input type="hidden"
			id="idstamp"
			name="idstamp"
			value="5IO6jTuUwUmQEVQEAiRRRLpBHQb5zC/0KSlqgg3NL9k=" />
        <input className="btn btn-primary" type="submit" value="Submit"/>
	</form>
);

export default Contact;