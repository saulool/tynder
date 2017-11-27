import React, {Component} from 'react';

import Footer from './footer';
import Header from './header';
import Authorization from './authorization';

import { connect } from 'react-redux';

class App extends Component {
	render() {
		const HeaderComponent = Authorization(Header);
		const FooterComponent = Authorization(Footer);

		return (
			<div className="app">
				<HeaderComponent />
				{this.props.children}
				<FooterComponent />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		state
	};
}

export default connect(mapStateToProps)(App);