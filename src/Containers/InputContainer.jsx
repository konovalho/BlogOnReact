import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';

class InputContainer extends React.Component {
        handleAddClick = () => {
          const newPost = this.textArea.value;
          this.props.addPost(newPost);
          this.textArea.value = '';
        }

        textAreaRef = (ref) => {
          this.textArea = ref;
        };

        render() {
          return (
            <div className="input-header">
              <textarea
                placeholder="Введи заметку"
                rows={5}
                defaultValue=""
                ref={this.textAreaRef}
              />
              <button onClick={this.handleAddClick}>добавить</button>
            </div>
          );
        }
}

export default connect(null, { addPost })(InputContainer);
