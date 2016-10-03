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
  Image
} from 'react-native';

// import Ether from '../lib/alta/ethereum'
import ClvBox from './common/clv-box'

export default class Dashboard extends Component {
  render() {
    // let eth = new Ether();
    // eth.createAddr();

    return (
      <Image source={require('../assets/img/background@2x.png')} style={styles.container}>
        <View style={styles.icon_panel}>
          <Image source={require('../assets/img/logo-mixed@2x.png')} />
        </View>
        <ClvBox title={'Select Language'}>
          <Text>asldkjf;lakdsjf</Text>
        </ClvBox>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 50,
  },
});
