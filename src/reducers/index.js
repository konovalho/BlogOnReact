import posts from './posts';
import visibilityFilter from './visibilityFilter';



const blogApp = (state, action) => {
  return {
    posts: posts(state.posts, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
};

export default blogApp;
