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
  constructor(props) {
    super(props);
  }

  render() {
    let btn_style = [styles.container];
    let text_style = styles.text_main;
    let underlayColor = '#6d982f';

    if (this.props.type === 'main') {
      btn_style.push(styles.type_main);
      text_style = styles.text_main;
      underlayColor = '#6d982f';
    } else if (this.props.type === 'ghost') {
      btn_style.push(styles.type_ghost);
      text_style = styles.text_ghost;
      underlayColor = '#7eb62e';
    } else if (this.props.type === 'dark') {
      btn_style.push(styles.type_dark);
      text_style = styles.text_dark;
      underlayColor = '#698184';
    } else if (this.props.type === 'clear') {
      btn_style.push(styles.type_clear);
      text_style = styles.text_clear;
      underlayColor = '#d8d8d8';
    } else if (this.props.type === 'clear_green') {
      btn_style.push(styles.type_clear_green);
      text_style = styles.text_clear_green;
      underlayColor = '#6d982f';
    }

    if (this.props.isDisable === true) {
      btn_style.push(styles.disable);
    }

    return (
      <TouchableHighlight style={[btn_style, this.props.style]}
        onPress={this.props.onPress}
        underlayColor={underlayColor}>
        <Text style={text_style}>
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
  },
  disable: {
    backgroundColor: '#d8d8d8'
  },
  type_main: {
    backgroundColor: '#7eb62e'
  },
  type_ghost: {
    borderWidth: 1,
    borderColor: '#d8d8d8',
    backgroundColor: '#f9f9f9'
  },
  type_dark: {
    backgroundColor: '#93a4a7'
  },
  type_clear: {

  },
  type_clear_green: {

  },
  text_main: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
  },
  text_ghost: {
    fontSize: 18,
    textAlign: 'center',
    color: '#4a4a4a',
  },
  text_dark: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
  },
  text_clear: {
    fontSize: 14,
    textAlign: 'center',
    color: '#f4a821',
  },
  text_clear_green: {
    fontSize: 16,
    textAlign: 'center',
    color: '#f4a821',
  }
});
