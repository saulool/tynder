import React, { Component } from 'react';
import { connect } from 'react-redux';

import CandidatesList from './candidatesList';

class Likeds extends Component{
	render() {
		return <CandidatesList candidates={this.props.likeds} />
	}
}

function mapStateToProps(state){
	return {
		likeds: state.candidates.likeds
	};
}

export default connect(mapStateToProps)(Likeds);