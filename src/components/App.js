import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Site from './pages/Site';
import NoRoute from './pages/NoRoute';

const Header = () => (
    <header className="header clearfix">
		<Nav/>
        <h3 className="text-muted">Tracy Chan</h3>
    </header>
);

const Nav = () => (
    <nav>
        <ul className="nav nav-pills float-right">
            <li className="nav-item">
				<NavLink to="/">Home</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="/about-me">About Me</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="/this-site">This Site</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="/contact">Contact</NavLink>
			</li>
		</ul>
    </nav>
);

const Footer = () => (
    <footer className="footer">
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
