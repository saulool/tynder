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
				<div className="bio">
					<span className="name">{this.props.candidate.name}</span>
					<span className="birthday">{this.props.candidate.dob}</span>
					<span className="street">{this.props.candidate.location.street}</span>
					<span className="city">{this.props.candidate.location.city}</span>
					<span className="state-country">{this.props.candidate.location.state} - {this.props.candidate.nationality}</span>
				</div>
			</div>
		)
	}
}

export default Candidate;