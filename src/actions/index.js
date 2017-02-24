import axios from 'axios';

const ACTION_TYPES = {
	LIKE_CANDIDATE: 'LIKE_CANDIDATE',
	DISLIKE_CANDIDATE: 'DISLIKE_CANDIDATE',
	GET_CANDIDATES: 'GET_CANDIDATES',
	GET_CANDIDATES_SUCCESS: 'GET_CANDIDATES_SUCCESS',
	GET_CANDIDATES_FAIL: 'GET_CANDIDATES_FAIL'
};

export function getCandidates() {
	return dispatch => {
		dispatch({ type: ACTION_TYPES.GET_CANDIDATES })

		return fetchCandidates().then(
			response => {
				dispatch({
					type: ACTION_TYPES.GET_CANDIDATES_SUCCESS,
					payload: response
				})
			},
			error => {
				console.log(error);
			}
		)
	}
}

async function fetchCandidates() {
	let candidatesRequest = await axios.get('https://randomuser.me/api/?results=1000');
	
	return candidatesRequest.data.results.map( (candidate) => {
		return {
			id: candidate.login.username,
			name: candidate.name.first + " " + candidate.name.last,
			dob: candidate.dob.split(" ")[0],
			picture: candidate.picture.large,
			phone: candidate.phone,
			cell: candidate.cell,
			nationality: candidate.nat,
			location: {
				street: candidate.location.street,
				city: candidate.location.city,
				state: candidate.location.state
			}
		}
	});
}

export function likeCandidate(candidate) {
	return {
		type: ACTION_TYPES.LIKE_CANDIDATE,
		payload: candidate
	}
}

export function dislikeCandidate(candidate) {
	return {
		type: ACTION_TYPES.DISLIKE_CANDIDATE,
		payload: candidate
	}
}