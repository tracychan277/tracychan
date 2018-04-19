import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import glasses from '../images/glasses.png';

const Nav = () => (
	<nav>
		<Link to="/"><img src={glasses} className="logo"/></Link>
		<Link to="/">Tracy Chan</Link>
		<button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>

		<div className="collapse" id="navbarSupportedContent">
			<ul>
				<li><NavLink exact to="/">Home</NavLink></li>
				<li><NavLink to="/about-me">About Me</NavLink></li>
				<li><NavLink to="/this-site">This Site</NavLink></li>
				<li><NavLink to="/contact">Contact</NavLink></li>
			</ul>
		</div>
	</nav>
);

export default Nav;