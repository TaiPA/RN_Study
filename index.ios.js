/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import './shim.js'
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Main from './app/components/main';

class RN_Study extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('RN_Study', () => RN_Study);
