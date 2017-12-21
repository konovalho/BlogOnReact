import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import {removePost} from '../actions/index';
import {editPost} from '../actions/index';
import {filterItems} from '../Util/filterItems';

class DisplayContainer extends React.Component {
  createList() {
    const {postList, removePost, editPost} = this.props;
    return postList.map((item, index) =>
      <Post
        key={index}
        removePost={removePost.bind(null, item.id)}
        editPost={editPost.bind(null, item.id)}
      >
        {item.text}
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
  return {
    postList: filterItems(posts, filter)
  };
};


export default connect(mapStateToProps,{removePost,editPost})(DisplayContainer);
