import { combineReducers } from 'redux';
import CandidatesReducer from './candidatesReducer';

const rootReducer = combineReducers({
	candidates: CandidatesReducer
});

export default rootReducer;