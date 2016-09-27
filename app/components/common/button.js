/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.container}
        onPress={this.props.onPress}
        underlayColor='#6d982f'>
        <Text style={styles.text}>
          {this.props.title}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 128,
    height: 38,
    backgroundColor: '#7eb62e'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
  }
});
