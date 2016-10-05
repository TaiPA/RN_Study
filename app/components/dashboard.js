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
  Image, TouchableOpacity
} from 'react-native';

import ClvBox from './common/clv-box'
const SideMenu = require('react-native-side-menu');
import Menu from './side-menu';
import SideMenuButton from './common/button-menu';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, selectedItem: 'overview' };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected(item) {
    console.log('Menu: ' + item);
    console.log(this.state.selectedItem);
    this.setState({
      isOpen: false,
      selectedItem: item
    });
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected.bind(this) } />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen) }>
        <Image source={require('../assets/img/background@2x.png') } style={styles.container}>
          <View style={styles.status_panel} />
          <View style={styles.header_panel}>
            <SideMenuButton style={styles.button} onPress={() => this.toggle() }/>
            <Text style={styles.header_title}>{this.state.selectedItem}</Text>
          </View>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload, {'\n'}
            Cmd+Control+Z for dev menu
          </Text>
          <Text style={styles.instructions}>
            Current selected menu item is: {this.state.selectedItem}
          </Text>
        </Image>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 15,
    marginRight: 20
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
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
    marginBottom: 5,
  },
  header_title: {
    fontSize: 18,
    color: '#4a4a4a'
  },
  status_panel: {
    height: 22
  },
  header_panel: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    // justifyContent: 'center',
    borderBottomWidth: 2,
    // borderWidth: 1,
    borderColor: 'grey',

  }
});