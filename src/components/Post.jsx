import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  constructor() {
    super();
  }
  handleRemovePost = () => {
    const {removePost} = this.props;
    removePost();
  }
  handleInputDisplay = () => {
    this.formEdit.style = {'display': 'block'};
  }
  formEditRef = (ref) => {
    this.formEdit = ref;
  };
  handleEditPost = (e) => {
    const value = e.target.firstElementChild.value;
    this.props.editPost(value);
    this.formEdit.style = {'display': 'none'};
  }
  render() {
    return (
      <div className="post">
        <span onClick={this.handleInputDisplay}>
          {this.props.children}
        </span>
        <form
          style={{'display': 'none'}}
          ref={this.formEditRef}
          onSubmit={this.handleEditPost}
        >
          <input />
        </form>
        <button onClick={this.handleRemovePost}>removes</button>
      </div>
    );
  }
}

Post.propTypes = {
  name: PropTypes.string,
};

export default Post;
