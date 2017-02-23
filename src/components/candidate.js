import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Candidate extends Component{
	render() {
		return (
			<div className="candidate">
				<div className="header">
					<img src={this.props.candidate.picture} />
				</div>
				<Link to={"detail/" + this.props.candidate.id} className="picture"><img src={this.props.candidate.picture} /></Link>
				<span className="name">{this.props.candidate.name}</span>
				<span className="birthday">{this.props.candidate.dob}</span>
			</div>
		)
	}
}

export default Candidate;