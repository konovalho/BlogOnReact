export const addPost = (text) => {
	return {
		type: 'ADD_POST',
		text
	}
}

export const removePost = (id) => {
	return {
		type: 'REMOVE_POST',
		id
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}