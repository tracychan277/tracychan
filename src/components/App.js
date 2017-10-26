import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
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
				<a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="/about-me">About Me</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="/contact">Contact</a>
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
					<Route path="/contact" component={Contact} />
					<Route component={NoRoute}/>
				</Switch>
			</main>
			<Footer/>
		</div>
	</Router>
);

export default App;
