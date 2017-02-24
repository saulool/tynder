import React, { Component } from 'react';

import Candidate from './candidate';

class CandidatesList extends Component{
	render() {
		let candidates = this.props.candidates.map( (candidate, index) => {
			return <li className="candidate-item" key={index}><Candidate candidate={candidate} /></li>
		});

		return <ul className="candidates-list">{candidates}</ul>
	}
}

export default CandidatesList;