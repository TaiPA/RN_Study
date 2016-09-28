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
  TouchableHighlight
} from 'react-native';

import AltaAddress from '../lib/alta/address';
import Button from './common/button';

export default class CreateRestoreWallet extends Component {
  render() {
    return (
      <Image source={require('../assets/img/background@2x.png')} style={styles.container}>
        <View style={styles.icon_panel}>
          <Image source={require('../assets/img/logo-mixed@2x.png')} />
        </View>
        <View style={styles.main_panel}>
          <View style={styles.title_panel}>
            <Text style={styles.title_panel_text}>
              Create or Restore
            </Text>
          </View>
          <View style={styles.btn_next} >
            <Button title='Create New Wallet' type='main' onPress={this.onPressBtnNext} style={styles.main_btn}/>
            <Button title='Restore Wallet' type='ghost' onPress={this.onPressBtnNext} style={styles.main_btn}/>
          </View>
        </View>
        <View style={styles.blank_footer_panel}>
        </View>
      </Image>
    );
  }

  onPressBtnNext() {
    console.log('Press next button');
  }

  createBtnCreateNewWallet() {
    return (
      <TouchableHighlight 
        onPress={this.props.onPress}
        underlayColor='#6d982f'>
        <Text style={styles.text}>
          Create New Wallet
        </Text>
      </TouchableHighlight>
    );
  }

  createBtnRestoreWallet() {
  return (
      <TouchableHighlight 
        onPress={this.props.onPress}
        underlayColor='#6d982f'>
        <Text style={styles.text}>
          Restore Wallet
        </Text>
      </TouchableHighlight>
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
  icon_panel: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_panel: {
    flex: 5,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(248, 248, 248, 0.6)',
    borderWidth: 1,
    borderColor:'#f0f0f0',
    marginLeft:15,
    alignSelf: 'stretch',
  },
  title_panel: {
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
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  main_btn: {
    height: 60,
    width: null,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25
  }
});
