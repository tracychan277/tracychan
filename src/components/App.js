import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Site from './pages/Site';
import NoRoute from './pages/NoRoute';
import {FaGithub} from 'react-icons/lib/fa';

const Header = () => (
	<header>
		<Nav/>
	</header>
);

const Nav = () => (
	<nav>
		<a href="/">Tracy Chan</a>
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

const Footer = () => (
	<footer>
		<p>&copy; Tracy Chan 2017 <a href="https://github.com/tracychan277/tracychan" title="View source code on Github" target="_blank" rel="noopener noreferrer"><FaGithub/></a></p>
	</footer>
);

const App = () => (
	<Router>
		<div className="container">
			<Header/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about-me" component={About} />
				<Route path="/this-site" component={Site} />
				<Route path="/contact" component={Contact} />
				<Route component={NoRoute}/>
			</Switch>
			<Footer/>
		</div>
	</Router>
);

export default App;
