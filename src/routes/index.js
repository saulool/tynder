import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import CandidateChooser from '../components/candidateChooser';
import Likeds from '../components/likeds';
import Dislikeds from '../components/dislikeds';
import CandidateDetail from '../components/candidateDetail';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={CandidateChooser} />
		<Route path="/likeds" component={Likeds} />
		<Route path="/dislikeds" component={Dislikeds} />
		<Route path="/detail/:id" component={CandidateDetail} />
	</Route>
)