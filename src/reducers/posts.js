const post = (state, { text }) => {
  const id = state.length ? state[state.length - 1].id + 1 : 0;
  return { id, text };
};

const posts = (state = [], action) => {
  switch (action.type) {
  case 'ADD_POST':
    return [
      ...state,
      post(state, action)
    ];
  case 'REMOVE_POST':
    return state.filter(item => item.id !== action.id);
  case 'EDIT__POST':
    return state.map(item => {
      if (item.id === action.id) {
        return { ...item, text: action.text };
      }
      return item;
    });
  default: return state;
  }
};

export default posts;
