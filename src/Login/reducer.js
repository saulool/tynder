import { LOGIN, LOGOUT, CHECKING_USER, LOGGING_IN, LOGIN_ERROR } from './constants';

const INITIAL_STATE = {
    username: null,
    password: null,
    loggedIn: false,
    loggingIn: false,
    loginError: false,
    checkingUser: false,
    error: null
}

const loginReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case LOGIN:
			return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                loggedIn: true,
                checkingUser: false
            };
        
        case LOGOUT:
			return {
                ...state,
                username: null,
                password: null,
                loggedIn: false,
                checkingUser: false
            };
        
        case CHECKING_USER:
			return {
                ...state,
                checkingUser: true
            };

        case LOGGING_IN:
			return {
                ...state,
                loggingIn: true,
                loginError: false            
            };
        
        case LOGIN_ERROR:
            return {
                ...state,
                loginError: true,
                loggingIn: false,
                error: action.payload
            }

        default: 
            return state;
	}
}

export default loginReducer;