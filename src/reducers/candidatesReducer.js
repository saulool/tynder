const INITIAL_STATE = {
	likeds: [],
	dislikeds: [],
	candidates: [],
	availableCandidates: [],
	currentCandidate: null,
	loadingCandidates: false
}

const ACTION_TYPES = {
	LIKE_CANDIDATE: 'LIKE_CANDIDATE',
	DISLIKE_CANDIDATE: 'DISLIKE_CANDIDATE',
	GET_CANDIDATES: 'GET_CANDIDATES',
	GET_CANDIDATES_SUCCESS: 'GET_CANDIDATES_SUCCESS',
	GET_CANDIDATES_FAIL: 'GET_CANDIDATES_FAIL'
};

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case ACTION_TYPES.LIKE_CANDIDATE :
			return {
				...state,
				availableCandidates: state.availableCandidates.slice(1),
				currentCandidate: state.availableCandidates.slice(1)[0],
				likeds: state.likeds.concat(state.currentCandidate)
			};

		case ACTION_TYPES.DISLIKE_CANDIDATE :
			return {
				...state,
				availableCandidates: state.availableCandidates.slice(1),
				currentCandidate: state.availableCandidates.slice(1)[0],
				dislikeds: state.dislikeds.concat(state.currentCandidate)
			};

		case ACTION_TYPES.GET_CANDIDATES_SUCCESS :
			return {
				...state,
				candidates: action.payload,
				availableCandidates: action.payload,
				currentCandidate: action.payload[0],
				loadingCandidates: false
			}

		case ACTION_TYPES.GET_CANDIDATES :
			return {
				...state,
				loadingCandidates: true
			}
	}

	return state;
}