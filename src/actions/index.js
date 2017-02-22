const ACTION_TYPES = {
	LIKE_PERSON: 'LIKE_PERSON',
	GET_CANDIDATES: 'GET_CANDIDATES'
};

export function getCandidates() {
	return {
		type: ACTION_TYPES.GET_CANDIDATES,
		payload: candidates
	}
}

export function likePerson(person) {
	return {
		type: ACTION_TYPES.LIKE_PERSON,
		payload: person
	}
}

const candidates = [
	{
		name: 'Teste',
		age: 18,
		id: 1
	},
	{
		name: 'Teste2',
		age: 19,
		id: 2
	}
]