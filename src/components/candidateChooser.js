import React, { Component } from 'react';
import { getCandidates, likeCandidate, dislikeCandidate } from '../actions/index';
import { connect } from 'react-redux';

import Candidate from './candidate'
import Loader from './loader'

class CandidateChooser extends Component{
	
	componentWillMount() {
		if(!this.props.currentCandidate && (this.props.dislikeds.length == 0 && this.props.likeds.length == 0))
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
			return <Loader />
		}else if(!this.props.currentCandidate){
			return <div className="no-candidates"><i className="fa fa-frown-o"></i> No more candidates</div>
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