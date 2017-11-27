import axios from 'axios';
import { LOGIN, LOGOUT, CHECKING_USER, LOGGING_IN, LOGIN_ERROR } from './constants';
import history from '../routes/history';

export function login(user) {
	return dispatch => {
        dispatch({ type: LOGGING_IN });

		return authenticateUser(user.username, user.password).then(
			() => {
				dispatch({
                    type: LOGIN,
                    payload: user
                })
                
                history.push('/');
			},
			error => {
				dispatch({
                    type: LOGIN,
                    payload: user
                })

                history.push('/');
			}
		)
	}
}

async function authenticateUser(username, password) {
	await axios.get('https://dsofjsdiof.me/api/?results=10');
}