import React, { Component } from 'react';
import { View } from 'react-native';

import Welcome from './src/view/Welcome';
import Weather from './src/view/Weather';

import Router from './src/config/router';

class App extends React.Component {
  render() {
    return (
      <Router/>
    );
  }
}

export default App;