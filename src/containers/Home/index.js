import React, { Component } from 'react';
//import { getCandidates, likeCandidate, dislikeCandidate } from '../actions/index';
//import { connect } from 'react-redux';

//import Candidate from './candidate'
import Loader from '../../components/loader'

class Home extends Component{

	render() {
		return <Loader />
	}

}

export default Home;
//export default connect(mapStateToProps, { getCandidates, likeCandidate, dislikeCandidate })(CandidateChooser);