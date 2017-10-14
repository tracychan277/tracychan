import React, {Component} from 'react';

class App extends Component {
	hello = 'Hello';
	
	render() {
		return <h1>{this.hello}</h1>;
	}
}

export default App;