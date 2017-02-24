import React, { Component } from 'react';
import { getCandidates, likeCandidate, dislikeCandidate } from '../actions/index';
import { connect } from 'react-redux';

import Candidate from './candidate'

class CandidateChooser extends Component{
	
	componentWillMount() {
		if(!this.props.currentCandidate)
			this.props.getCandidates();
	}

	renderCandidate() {
		return (
			<div className="candidate-chooser">
				<Candidate candidate={this.props.currentCandidate} />
				<div className="actions">
					<button className="dislike-button" onClick={this.props.dislikeCandidate}><i className="glyphicon glyphicon-remove"></i></button>
					<button className="like-button" onClick={this.props.likeCandidate}><i className="glyphicon glyphicon-heart"></i></button>
				</div>
			</div>
		);
	}

	render() {
		if(!this.props.currentCandidate && this.props.loadingCandidates){
			return <div>Loading</div>;
		}else if(!this.props.currentCandidate){
			return <div>No more candidates</div>
		}else{
			return this.renderCandidate();
		}
	}

}

function mapStateToProps(state){
	console.log('state');
	console.log(state);
	return {
		likeds: state.candidates.likeds,
		dislikeds: state.candidates.dislikeds,
		availableCandidates: state.candidates.availableCandidates,
		currentCandidate: state.candidates.currentCandidate,
		loadingCandidates: state.candidates.loadingCandidates
	};
}

export default connect(mapStateToProps, { getCandidates, likeCandidate, dislikeCandidate })(CandidateChooser);