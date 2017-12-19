const post = (state, action) => {
  let id;
  if(state.length > 0) {
    id = state[state.length-1].id + 1;
  }
  else {
    id = 0;
  }
    return {
      id: id,
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