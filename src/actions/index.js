export const addPost = (text) => {
	return {
		type: 'ADD_POST',
		text
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}