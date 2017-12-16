const post = (state, action) => {
    return {
      id: state.length,
      text: action.text
    }
}

const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        post(state,action)
      ]
    case 'REMOVE_POST':
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

export default posts;