import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Site from './pages/Site';
import NoRoute from './pages/NoRoute';

const Header = () => (
    <header>
		<Nav/>
    </header>
);

const Nav = () => (
    <nav className="navbar navbar-expand-md navbar-light">
		<a className="navbar-brand" href="/"><h3>Tracy Chan</h3></a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		
		<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
			<ul className="nav nav-pills">
				<li className="nav-item">
					<NavLink exact className="nav-link" to="/">Home</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/about-me">About Me</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/this-site">This Site</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/contact">Contact</NavLink>
				</li>
			</ul>
		</div>
    </nav>
);

const Footer = () => (
    <footer>
		<p>Copyright &copy; Tracy Chan 2017</p>
    </footer>
);

const App = () => (
	<Router>
		<div className="container">
			<Header/>
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about-me" component={About} />
					<Route path="/this-site" component={Site} />
					<Route path="/contact" component={Contact} />
					<Route component={NoRoute}/>
				</Switch>
			</main>
			<Footer/>
		</div>
	</Router>
);

export default App;
