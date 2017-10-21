import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Site from './pages/Site';
import Work from './pages/Work';
import Contact from './pages/Contact';
import NoRoute from './pages/NoRoute';

const Main = () => (
	<Router>
		<div>
			<nav>
				<ul>
					<li><Link to="/about-me">About Me</Link></li>
					<li><Link to="/this-site">This Site</Link></li>
					<li><Link to="/my-work">My Work</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</nav>
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about-me" component={About} />
					<Route path="/this-site" component={Site} />
					<Route path="/my-work" component={Work} />
					<Route path="/contact" component={Contact} />
					<Route component={NoRoute}/>
				</Switch>
			</main>
		</div>
	</Router>
);

export default Main;
