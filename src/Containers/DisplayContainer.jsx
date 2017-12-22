import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import {removePost} from '../actions/index';
import {editPost} from '../actions/index';
import {filterItems} from '../Util/filterItems';

class DisplayContainer extends React.Component {
  createList() {
    const {postList, removePost, editPost} = this.props;
    console.log(postList);
    return postList.map(({ id, text }) =>
      <Post
        key={id}
        removePost={removePost.bind(null, id)}
        editPost={editPost.bind(null, id)}
        value={text}
      >
      </Post>
    );
  }
  render() {
    const list = this.createList();
    return (
      <div className="blog">
        {list}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const filter = state.visibilityFilter;
  const posts = state.posts;
  console.log(posts);
  return {
    postList: filterItems(posts, filter)
  };
};


export default connect(mapStateToProps,{removePost,editPost})(DisplayContainer);
