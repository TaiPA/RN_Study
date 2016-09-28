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
  Image,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

import Button from './common/button';
var DismissKeyboard = require('dismissKeyboard');
export default class SetWalletName extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={()=> DismissKeyboard()}>
      <Image source={require('../assets/img/background@2x.png')} style={styles.container}>
        <View style={styles.blank_header_panel} />
        <View style={styles.main_panel}>
          <View style={styles.title_panel}>
            <Text style={styles.title_panel_text}>
              Your wallet Name
            </Text>
          </View>
          <Text>
            This is just your wallet name.
          </Text>
          <View style={styles.input_panel}>
            <Text>Wallet Name</Text>
            <TextInput
              style={styles.inputName}
              placeholder="Type here to translate!"
              onChangeText={(text) => this.setState({text})}
            />
          </View>
          <View style={styles.btn_panel} >
            <Button title='Back' type='ghost' onPress={this.onPressBtnNext} />
            <Button title='Done' type='main' onPress={this.onPressBtnNext} />
          </View>
        </View>
        <View style={styles.blank_header_panel} />
      </Image>
      </TouchableWithoutFeedback>
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
  btn_panel: {
    alignSelf:'stretch',
    marginRight:15,
    marginLeft:15,
    marginBottom:10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input_panel: {
    alignSelf: 'stretch',
    marginLeft: 15,
    marginRight: 15,
  },
  inputName: {
    height: 33,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    backgroundColor: '#ffffff',
    fontSize: 13,
    color: '#4a4a4a',
  }
});
