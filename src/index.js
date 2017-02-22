import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

store.subscribe( () => {
	//	console.log(store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('main')
);