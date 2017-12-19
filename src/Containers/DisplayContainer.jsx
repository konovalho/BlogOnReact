import React, {Component} from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import {removePost} from '../actions/index';
import {filterItems} from '../Util/filterItems';

class DisplayContainer extends Component {
  constructor() {
    super();
  }
  createList(){
  	const {postList, onRemovePost} = this.props;
  	return postList.map((item, index) => 
  		<Post 
  		key={index} 
  		onRemovePost={onRemovePost.bind(null, item.id)}
  		>
  			{item.text}
  		</Post>)
  }
  render() {
  	const list = this.createList();
    return (
      <div className="blog">
      {list}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
	const filter = state.visibilityFilter;
	const posts = state.posts;
  return {
    postList: filterItems(posts, filter)
  }
}
const mapDispatchProps = (dispatch) => {
  return {
    onRemovePost: (id) => {
    	console.log('in container work');
      dispatch(removePost(id));
    }
  }
}


export default connect(mapStateToProps,mapDispatchProps)(DisplayContainer);