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
  render() {
    return (
      <div className="post">
        {this.props.children}
        <button onClick={this.handleRemovePost}>removes</button>
      </div>
    );
  }
}

Post.propTypes = {
  name: PropTypes.string,
};

export default Post;
