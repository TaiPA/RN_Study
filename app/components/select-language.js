/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import AltaAddress from '../lib/alta/address';
import Button from './common/button';

export default class SelectLanguage extends Component {
  render() {
    return (
      <Image source={require('../assets/img/background@2x.png')} style={styles.container}>
        <View style={styles.icon_panel}>
          <Image source={require('../assets/img/logo-mixed@2x.png')} />
        </View>
        <View style={styles.main_panel}>
          <View style={styles.title_panel}>
            <Text style={styles.title_panel_text}>
              Select your language
            </Text>
          </View>
          <Button title='Next' onPress={this.onPressBtnNext} style={styles.btn_next} />
        </View>
        <View style={styles.blank_footer_panel}>
        </View>
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
  icon_panel: {
    flex: 2,
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
    alignSelf: 'stretch'
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
  blank_footer_panel: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
  btn_next: {
    flex:5
  }
});
