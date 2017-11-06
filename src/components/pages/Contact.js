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
		emailError: '',
		firstNameValid: false,
		lastNameValid: false,
		emailValid: false,
		messageValid: false,
		formValid: false
	}

	handleUserInput(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState(
			{[name]: value},
			() => {this.validateField(name, value)}
		);
	}

	validateField(name, value) {
		let firstNameValid = this.state.firstNameValid;
		let lastNameValid = this.state.lastNameValid;
		let messageValid = this.state.messageValid;
		let emailValid = this.state.emailValid;
		let emailError = this.state.emailError;
		const notEmpty = value.trim().length >= 1;

		switch(name) {
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
				emailError = emailValid ? '' : 'Please enter a valid email address.';
				break;
		}

		this.setState({
			firstNameValid,
			lastNameValid,
			messageValid,
			emailValid,
			emailError,
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

	render() {
		return (
				<form acceptCharset="UTF-8"
					autoComplete="off"
					encType="multipart/htmlForm-data"
					method="post"
					noValidate
					action="https://formspree.io/hello@tracychan.me"
				>
					<div className="form-group">
						<div className="row">
							<div className="col">
								<input name="firstName"
									type="text"
									className="form-control"
									tabIndex="1"
									placeholder="First Name"
									value={this.state.firstName}
									onChange={(event) => this.handleUserInput(event)}/>
							</div>
							<div className="col">
								<input name="lastName"
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
							<input name="email"
								type="email"
								spellCheck="false"
								className={this.state.emailError.length === 0 ? 'form-control' : 'form-control is-invalid'}
								maxLength="255"
								tabIndex="3"
								placeholder="Email Address"
								value={this.state.email}
								onChange={(event) => this.handleUserInput(event)}/>
						</div>
						{
							this.state.emailError.length > 0 ?
							<div className="text-danger">{this.state.emailError}</div> :
							null
						}
					</div>
					<div className="form-group">
						<textarea name="message"
							className="form-control"
							spellCheck="true"
							rows="10" cols="50"
							tabIndex="4"
							placeholder="Type your message here..."
							value={this.state.message}
							onChange={(event) => this.handleUserInput(event)}
						></textarea>
					</div>
					<input className="btn btn-primary"
						type="submit"
						value="Submit"
						disabled={!this.state.formValid}/>
				</form>
		);
	}
}

export default Contact;