import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  handleRemovePost = () => {
    const {removePost} = this.props;
    removePost();
  }
  formEditRef = (ref) => {
    this.formEdit = ref;
  };
  handleInputDisplay = () => {
    this.formEdit.readOnly = false;
    this.formEdit.style.border = '1px solid #999';
  }
  handleEditPost = (value) => {
    this.props.editPost(value);
  }
  handleReadonblyInput = (e) => {
    const value = e.target.value;
    this.formEdit.readOnly = true;
    this.formEdit.style.border = 'none';
    this.handleEditPost(value);
  }
  handleKeyUp = (e) => {
    if(e.keyCode === 13){
      e.preventDefault;
      this.handleReadonblyInput(e);
    }
  }
  render() {
    return (
      <div className="post">
        <input
          style={{'border': 'none'}}
          onDoubleClick={this.handleInputDisplay}
          ref={this.formEditRef}
          readOnly={true}
          defaultValue={this.props.children}
          onBlur={this.handleReadonblyInput}
          onKeyUp={this.handleKeyUp}
        />
        <button onClick={this.handleRemovePost}>removes</button>
      </div>
    );
  }
}

Post.propTypes = {
  name: PropTypes.string,
};

export default Post;
