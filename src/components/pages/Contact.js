import React, {Component} from 'react';
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

class ContactForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		message: '',
		firstNameValid: false,
		lastNameValid: false,
		emailValid: false,
		messageValid: false,
		formValid: false
	}

	handleUserInput(e) {
		const id = e.target.id;
		const value = e.target.value;
		this.setState(
			{[id]: value},
			() => {this.validateField(id, value)}
		);
	}

	validateField(id, value) {
		let firstNameValid = this.state.firstNameValid;
		let lastNameValid = this.state.lastNameValid;
		let messageValid = this.state.messageValid;
		let emailValid = this.state.emailValid;
		const notEmpty = value.trim().length >= 1;

		switch(id) {
			case 'firstName':
				firstNameValid = notEmpty;
				break;
			case 'lastName':
				lastNameValid = notEmpty;
				break;
			case 'message':
				messageValid = notEmpty;
				break;
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				break;
		}

		this.setState({
			firstNameValid,
			lastNameValid,
			messageValid,
			emailValid,
		}, this.validateForm);
	}

	validateForm() {
		this.setState({
			formValid: this.state.firstNameValid &&
				this.state.lastNameValid &&
				this.state.messageValid &&
				this.state.emailValid
		});
	}

	errorClass(error) {
		return (
			error.length === 0 ? '' : 'has-error'	
		);
	}

	render() {
		return (
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
								<input id="firstName"
									name="Field1"
									type="text"
									className="form-control"
									tabIndex="1"
									placeholder="First Name"
									value={this.state.firstName}
									onChange={(event) => this.handleUserInput(event)}/>
							</div>
							<div className="col">
								<input id="lastName"
									name="Field2"
									type="text"
									className="form-control"
									tabIndex="2"
									placeholder="Surname"
									value={this.state.lastName}
									onChange={(event) => this.handleUserInput(event)}/>
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
								placeholder="Email Address"
								value={this.state.email}
								onChange={(event) => this.handleUserInput(event)}/>
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
							value={this.state.message}
							onChange={(event) => this.handleUserInput(event)}
						></textarea>
					</div>
					<input type="hidden"
						id="idstamp"
						name="idstamp"
						value="5IO6jTuUwUmQEVQEAiRRRLpBHQb5zC/0KSlqgg3NL9k=" />
					<input className="btn btn-primary"
						type="submit"
						value="Submit"
						disabled={!this.state.formValid}/>
				</form>
		);
	}
}

export default Contact;