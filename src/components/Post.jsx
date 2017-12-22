import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
class Post extends React.Component {
  state = {
    value: this.props.value,
    readOnly: true
  };

  componentWillReceiveProps({ value }) {
    if (this.props.value !== value) {
      this.setState({ value });
    }
  }

  handleRemovePost = () => {
    const {removePost} = this.props;
    removePost();
  };

  handleEditPost = (value) => {
    this.props.editPost(value);
  };

  handleInputChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  handleInputBlur = () => {
    if(!this.state.readOnly){
      this.props.editPost(this.state.value);
      this.setState({
        readOnly: true
      });
    }
  };

  handleKeyUp = (e) => {
    if(e.keyCode === 13){
      e.target.blur();
    }
  };

  handleonDoubleClick = () => {
    this.setState({
      readOnly: false
    });
  };

  render() {
    return (
      <div className="post">
        <div className="post-wrapper">
          <input
            value={this.state.value}
            onChange={this.handleInputChange}
            onBlur={this.handleInputBlur}
            readOnly={this.state.readOnly}
            onKeyUp={this.handleKeyUp}
            onDoubleClick={this.handleonDoubleClick}
          />
        </div>
        <button onClick={this.handleRemovePost}>removes</button>
      </div>
    );
  }
}

Post.propTypes = {
  value: PropTypes.string,
};

export default Post;
