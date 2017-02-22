import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import CandidateChooser from '../components/candidateChooser';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={CandidateChooser} />
	</Route>
)