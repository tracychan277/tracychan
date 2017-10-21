import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Site from './pages/Site';
import Work from './pages/Work';
import Contact from './pages/Contact';

const Main = () => (
	<Router>
		<div>
			<nav>
				<Link to="/about-me">About Me</Link>
				<Link to="/this-site">This Site</Link>
				<Link to="/my-work">My Work</Link>
				<Link to="/contact">Contact</Link>
			</nav>
			<main>
				<Route exact path="/" component={Home} />
				<Route path="/about-me" component={About} />
				<Route path="/this-site" component={Site} />
				<Route path="/my-work" component={Work} />
				<Route path="/contact" component={Contact} />
			</main>
		</div>
	</Router>
);

export default Main;
