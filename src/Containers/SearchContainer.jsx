import React from 'react';
import { connect } from 'react-redux';
import {setVisibilityFilter} from '../actions/index';

class SearchContainer extends React.Component {
  constructor() {
    super();
  }
  handleChangeFilter = (e) => {
    const value = e.target.value;
    const {onChangeFilter} = this.props;
    onChangeFilter(value);
  }
  render() {
    return (
      <div className="search-form">
        <form >
          <h4 style={{'margin': '0px'}}>Поиск</h4>
          <input
            onChange={this.handleChangeFilter}/>
        </form>
      </div>
    );
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    onChangeFilter: (value) => {
      dispatch(setVisibilityFilter(value));
    }
  };
};

export default connect(null, mapDispatchProps)(SearchContainer);
