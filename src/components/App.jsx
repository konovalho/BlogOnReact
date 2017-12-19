import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputContainer from '../Containers/InputContainer';
import DisplayContainer from '../Containers/DisplayContainer';
import SearchContainer from '../Containers/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="">
      приложуха ура!!
      <br />
      <SearchContainer />
      <br />
      <InputContainer />
      <br />
      <DisplayContainer />
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
}

export default App;