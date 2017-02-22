const INITIAL_STATE = {
	likeds: [],
	dislikeds: [],
	availableCandidates: [],
	currentCandidate: null
}

const ACTION_TYPES = {
	LIKE_PERSON: 'LIKE_PERSON',
	GET_CANDIDATES: 'GET_CANDIDATES'
};

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case ACTION_TYPES.LIKE_PERSON :
			return action.payload;

		case ACTION_TYPES.GET_CANDIDATES :
			return {
				...state,
				availableCandidates: action.payload,
				currentCandidate: action.payload[0]
			}
	}

	return state;
}