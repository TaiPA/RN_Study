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

import Button from './common/button';
import ClvBox from './common/clv-box'

export default class TermAndCondition extends Component {
  render() {
    return (
      <Image source={require('../assets/img/background@2x.png') } style={styles.container}>
        <View style={styles.blank_header_panel} />
        <ClvBox title={'Terms & Condition'} style={styles.clv_box}>
          <View style={styles.content_panel}></View>
          <View style={styles.button_panel}>
            <Button title='Next' type='main' onPress={this.onPressBtnNext} />
          </View>
        </ClvBox>
        <View style={styles.blank_header_panel} />
      </Image>
    );
  }

  onPressBtnNext() {
    console.log('Press next button');
  }

  generatePassphases() {
    let libaa = new AltaAddress();
    let passphases = libaa.createPassphases();
    return passphases;
  }

  generateBTCAddress() {
    let libaa = new AltaAddress();
    return libaa.createAddressBTC(libaa.createPassphases());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  blank_header_panel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clv_box: {
    flex: 5
  },
  content_panel: {
    flex: 1
  },
  button_panel: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10
  }
});
