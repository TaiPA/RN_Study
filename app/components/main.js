/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigationExperimental
} from 'react-native';

import Sample from './sample'
import SelectLanguage from './select-language'
import TermAndCondition from './term-condition'
import CreateRestoreWallet from './create-restore'
import SetWalletName from './set-wallet-name'
import Dashboard from './dashboard'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

export default class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // This defines the initial navigation state.
      navigationState: {
        index: 0, // Starts with first route focused.
        routes: [{ type: 'push', key: 'SELECT-LANGUAGE' }], // Starts with only one route.
      },
    };

    // We'll define this function later - hang on
    this._onNavigationChange = this._onNavigationChange.bind(this);
    this._onPushRoute = (key) => { this._onNavigationChange({ type: 'push', key: key }) };
    this._onPopRoute = () => { this._onNavigationChange({ type: 'pop' }) };
    this._renderScene = this._renderScene.bind(this);
  }

  _onNavigationChange(action) {
    // Extract the navigationState from the current state:
    let {navigationState} = this.state;

    switch (action.type) {
      case 'push':
        // Push a new route, which in our case is an object with a key value.
        // I am fond of cryptic keys (but seriously, keys should be unique)
        const route = { key: action.key };

        // Use the push reducer provided by NavigationStateUtils
        navigationState = NavigationStateUtils.push(navigationState, route);
        break;

      case 'pop':
        // Pop the current route using the pop reducer.
        navigationState = NavigationStateUtils.pop(navigationState);
        break;
    }

    // NavigationStateUtils gives you back the same `navigationState` if nothing
    // has changed. We will only update state if it has changed.
    if (this.state.navigationState !== navigationState) {
      // Always use setState() when setting a new state!
      this.setState({ navigationState });
      // If you are new to ES6, the above is equivalent to:
      // this.setState({navigationState: navigationState});
    }
  }

  // Render a scene for route.
  // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
  // as type `NavigationSceneRendererProps`.
  // Here you could choose to render a different component for each route, but
  // we'll keep it simple.
  _renderScene(sceneProps) {
    if (sceneProps.scene.route.key === 'SELECT-LANGUAGE') {
      return (
        <SelectLanguage
          // route={sceneProps.scene.route}
          onPushRoute={this._onPushRoute}
          onPopRoute={this._onPopRoute} />
      );
    } else if (sceneProps.scene.route.key === 'TERM-CONDITION') {
      return (
        <TermAndCondition
          // route={sceneProps.scene.route}
          onPushRoute={this._onPushRoute}
          onPopRoute={this._onPopRoute} />
      );
    } else if (sceneProps.scene.route.key === 'CREATE-RESTORE') {
      return (
        <CreateRestoreWallet
          // route={sceneProps.scene.route}
          onPushRoute={this._onPushRoute}
          onPopRoute={this._onPopRoute} />
      );
    } else if (sceneProps.scene.route.key === 'SET-WALLET-NAME') {
      return (
        <SetWalletName
          // route={sceneProps.scene.route}
          onPushRoute={this._onPushRoute}
          onPopRoute={this._onPopRoute} />
      );
    } else if (sceneProps.scene.route.key === 'DASHBOARD') {
      return (
        <Dashboard
          // route={sceneProps.scene.route}
          onPushRoute={this._onPushRoute}
          onPopRoute={this._onPopRoute} />
      );
    }
  }

  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.state.navigationState}
        renderScene={this._renderScene}
        onExit={this._exit} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
