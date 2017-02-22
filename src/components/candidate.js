import React, { Component } from 'react';
import { connect } from 'react-redux';

class Candidate extends Component{
	render() {
		return (
			<span>{this.props.candidate.name}</span>
		)
	}
}

export default Candidate;