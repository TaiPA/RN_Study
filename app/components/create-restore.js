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
import ClvBox from './common/clv-box';

export default class CreateRestoreWallet extends Component {
  render() {
    return (
      <Image source={require('../assets/img/background@2x.png') } style={styles.container}>
        <View style={styles.icon_panel}>
          <Image source={require('../assets/img/logo-mixed@2x.png') } />
        </View>
        <ClvBox title={'Create or Restore'} style={styles.clv_box} body_style={styles.content_panel}>
          <Button title='Create New Wallet' type='main' onPress={this.onPressBtnNext} style={styles.big_btn}/>
          <Button title='Restore Wallet' type='ghost' onPress={this.onPressBtnNext} style={styles.big_btn}/>
        </ClvBox>
        <View style={styles.blank_footer_panel}>
        </View>
      </Image>
    );
  }

  onPressBtnNext() {
    console.log('Press next button');
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
  blank_footer_panel: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  big_btn: {
    height: 60,
    width: null,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25
  },
  clv_box: {
    flex: 5
  },
  content_panel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
