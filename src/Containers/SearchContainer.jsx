import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setVisibilityFilter} from '../actions/index';

class SearchContainer extends Component {
  constructor() {
    super();
    this.onChangeFilter = this.onChangeFilter.bind(this);
  }
  onChangeFilter(e) {
  	const value = e.target.value;
  	const {onChangeFilter} = this.props;
  	onChangeFilter(value);
  }
  render() {
    return (
      <div className="search-form">
      	<form >
      	<h4 style={{'margin': '0px'}}>search</h4>
      	<input 
      	onChange={this.onChangeFilter}/>
      	</form>
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
    onChangeFilter: (value) => {
      dispatch(setVisibilityFilter(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(SearchContainer);