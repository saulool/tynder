import React, { Component } from 'react';

class Loader extends Component{
	render() {
		return (
			<div className="loader"><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> Loading</div>
		)
	}
}

export default Loader;