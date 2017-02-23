import React, { Component } from 'react';
import { connect } from 'react-redux';

class CandidateDetail extends Component{
	render() {
		let candidate = this.props.candidates.find( candidate => {
			return candidate.id == this.props.params.id;
		});

		return (
			<div>
				<img src={candidate.picture} />
				<span>{ candidate.id }</span>
				<span>{ candidate.name }</span>
				<span>{ candidate.dob }</span>
				<span>{ candidate.phone }</span>
				<span>{ candidate.cell }</span>
				<span>{ candidate.nationality }</span>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		candidates: state.candidates.candidates
	};
}

export default connect(mapStateToProps)(CandidateDetail);