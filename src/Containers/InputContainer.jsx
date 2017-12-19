import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addPost} from '../actions/index';

class InputContainer extends Component {
  constructor() {
    super();
    this.onAddPost = this.onAddPost.bind(this);
  }
  onAddPost(){
  	const newPost = this.refs.postTextArea.value;
  	const {onAddPost} = this.props;
  	onAddPost(newPost);
  	this.refs.postTextArea.value = '';
  }
  render() {
  	
    return (
      <div className="input-header">
      		<textarea
      		placeholder="Введи заметку"
      		rows={5}
      		defaultValue=""
      		ref="postTextArea"
      		 />
      		<button onClick={this.onAddPost}>добавить</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    onAddPost: (value) => {
      dispatch(addPost(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(InputContainer);