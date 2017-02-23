import React, { Component } from 'react';
import { connect } from 'react-redux';

import Candidate from './candidate';

class Likeds extends Component{
	render() {
		let candidates = this.props.likeds.map( (liked, index) => {
			return <Candidate candidate={liked} key={index} />
		});

		return <div>{candidates}</div>
	}
}

function mapStateToProps(state){
	return {
		likeds: state.candidates.likeds
	};
}

export default connect(mapStateToProps)(Likeds);