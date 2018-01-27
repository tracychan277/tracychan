import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Site from './pages/Site';
import NoRoute from './pages/NoRoute';

const App = () => (
	<Router>
		<div className="container">
			<Header/>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/about-me" component={About}/>
				<Route path="/this-site" component={Site}/>
				<Route path="/contact" component={Contact}/>
				<Route component={NoRoute}/>
			</Switch>
			<Footer/>
		</div>
	</Router>
);

export default App;
