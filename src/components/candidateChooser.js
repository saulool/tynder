import React, { Component } from 'react';
import { getCandidates } from '../actions/index';
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
				<img src="http://www.beautyandtips.com/wp-content/uploads/2015/03/TIPS-ON-HOW-TO-SURVIVE-A-BREAKUP-AND-FEEL-LIKE-A-BETTER-PERSON-150x150.jpg?x94091" />
				<Candidate candidate={this.props.currentCandidate} />
				<button className="like-button"><i className="glyphicon glyphicon-remove"></i></button>
				<button className="dislike-button"><i className="glyphicon glyphicon-heart"></i></button>
			</div>
		);
	}

	render() {
		if(this.props.currentCandidate){
			console.log('sss');
			return this.renderCandidate()
		}else{
			return (
				<div></div>
			)
		}
	}

}

function mapStateToProps(state){
	console.log(state);
	return {
		likeds: state.candidates.likeds,
		dislikeds: state.candidates.dislikeds,
		availableCandidates: state.candidates.availableCandidates,
		currentCandidate: state.candidates.currentCandidate
	};
}

export default connect(mapStateToProps, { getCandidates })(CandidateChooser);