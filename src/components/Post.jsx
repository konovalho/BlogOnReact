import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  constructor() {
    super();
    this.onRemovePost = this.onRemovePost.bind(this);
  }
  onRemovePost() {
  	console.log('post работает');
  	const {onRemovePost} = this.props;
  	onRemovePost();
  }
  render() {
    return (
      <div className="post">
      {this.props.children}
      <button onClick={this.onRemovePost}>removes</button>
      </div>
    );
  }
}

Post.propTypes = {
  name: PropTypes.string,
}

export default Post;