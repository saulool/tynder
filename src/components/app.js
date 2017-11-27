import React, {Component} from 'react';

import Footer from './footer';
import Header from './header';
import axios from 'axios';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default App;