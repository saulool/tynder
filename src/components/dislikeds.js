import React, { Component } from 'react';
import { connect } from 'react-redux';

import CandidatesList from './candidatesList';

class Dislikeds extends Component{
	render() {
		return <CandidatesList candidates={this.props.dislikeds} />
	}
}

function mapStateToProps(state){
	return {
		dislikeds: state.candidates.dislikeds
	};
}

export default connect(mapStateToProps)(Dislikeds);