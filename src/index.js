import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './Components/SeasonDisplay';
import LoadingSpinner from './Components/LoadingSpinner';

class App extends Component {  
  state = { 
    latitude: null, 
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  };

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <LoadingSpinner body="Please allow location..." />;
  }

  render() {
    return this.renderContent();
  };
};

if (module.hot) {
  module.hot.accept(); 
};

ReactDOM.render(<App />, document.querySelector('#root'));