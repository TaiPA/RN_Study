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
import ClvBox from './common/clv-box'
var DismissKeyboard = require('dismissKeyboard');

export default class SetWalletName extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => DismissKeyboard() }>
        <Image source={require('../assets/img/background@2x.png') } style={styles.container}>
          <View style={styles.blank_panel} />
          <ClvBox title={'Your wallet Name'} style={styles.clv_box}>
            <View style={styles.content_panel}>
              <View style={styles.description_panel}>
                <Text style={styles.description_text}>
                  This is just your wallet name.
                </Text>
              </View>
              <View style={styles.input_panel}>
                <Text>Wallet Name</Text>
                <TextInput
                  style={styles.inputName}
                  placeholder="Type here to translate!"
                  onChangeText={(text) => this.setState({ text }) }
                  />
              </View>
              <View style={styles.blank_panel_2} />
            </View>
            <View style={styles.button_panel}>
              <Button title='Back' type='ghost' onPress={this.onPressBtnNext} />
              <Button title='Done' type='main' onPress={this.onPressBtnNext} />
            </View>
          </ClvBox>
          <View style={styles.blank_panel} />
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
  blank_panel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_panel: {
    alignSelf: 'stretch',
    marginLeft: 15,
    marginRight: 15,
    flex: 6,
    justifyContent: 'center',
  },
  inputName: {
    height: 40,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    backgroundColor: '#ffffff',
    fontSize: 13,
    color: '#4a4a4a',
    paddingLeft: 10,
    marginTop: 5
  },
  clv_box: {
    flex: 5
  },
  content_panel: {
    flex: 1
  },
  button_panel: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  description_panel: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 2,
  },
  description_text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  blank_panel_2: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
