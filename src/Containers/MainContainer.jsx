import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addPost} from '../actions/index';

class MainContainer extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
  	const {AddPost} = this.props;
  	const value = e.target.value;
  	AddPost(value);
 }
  render() {
  	const {component} = this.props;
  	let text = '';
  	if(component){
  		text = component.map(item => <li>{item.text}</li>)
  	}
    return (
      <div className="input-cont">
      	<input 
      		onChange={this.onChange}
      	/> <br/>
      	<ul>{text}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    component: state.posts
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    AddPost: (text) => {
      dispatch(addPost(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(MainContainer);