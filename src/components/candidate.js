import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Candidate extends Component{
	render() {
		return (
			<div className="candidate">
				<Link to={"detail/" + this.props.candidate.id}><img src={this.props.candidate.picture} /></Link>
				<span>{this.props.candidate.name}</span>
				<span>{this.props.candidate.dob}</span>
			</div>
		)
	}
}

export default Candidate;