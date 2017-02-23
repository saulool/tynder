import React, { Component } from 'react';
import { connect } from 'react-redux';

import Candidate from './candidate';

class Dislikeds extends Component{
	render() {
		let candidates = this.props.dislikeds.map( (disliked, index) => {
			return <Candidate candidate={disliked} key={index} />
		});

		return <div>{candidates}</div>
	}
}

function mapStateToProps(state){
	return {
		dislikeds: state.candidates.dislikeds
	};
}

export default connect(mapStateToProps)(Dislikeds);