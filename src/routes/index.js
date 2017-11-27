import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Authorization from '../components/authorization';
import Login from '../Login/';
import Home from '../Home/';

export default (
	<Switch>
		<Route exactly path="/login" component={Login} />
		<Route exactly path="/" component={Authorization(Home, true)} />
	</Switch>
)