import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainContainer from '../Containers/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="">
      приложуха
      <br />
      <MainContainer />
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
}

export default App;