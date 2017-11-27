import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Header from './components/header';
import Footer from './components/footer';
import Authorization from './components/authorization';
import Login from './Login/';
import Home from './Home/';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, Switch } from 'react-router-dom';
import history from './routes/history';

const HeaderComponent = Authorization(Header);

import reducers from './reducers';
import routes from './routes';

import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

store.subscribe( () => {
	console.log(store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div className="app">
				<HeaderComponent />
				{routes}
				<Footer />
			</div>
		</Router>
	</Provider>,
	document.getElementById('main')
);