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

export default class TermAndCondition extends Component {
  render() {
    return (
      <Image source={require('../assets/img/background@2x.png')} style={styles.container}>
        <View style={styles.blank_header_panel} />
        <View style={styles.main_panel}>
          <View style={styles.title_panel}>
            <Text style={styles.title_panel_text}>
              Terms & Condition
            </Text>
          </View>
          <View style={styles.btn_next} >
            <Button title='Next' type='main' onPress={this.onPressBtnNext} />
          </View>
        </View>
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
  main_panel: {
    flex: 5,
    alignItems: 'center',
    backgroundColor: 'rgba(248, 248, 248, 0.6)',
    borderWidth: 1,
    borderColor:'#f0f0f0',
    marginLeft:15,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  title_panel: {
    alignSelf: 'stretch',
    height: 46,
    borderWidth: 1,
    borderColor:'#f0f0f0',
    borderRadius: 2,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title_panel_text: {
    fontSize: 18,
    color: '#4a4a4a'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
  btn_next: {
    alignSelf:'flex-end',
    marginRight:15,
    marginBottom:10
  }
});
