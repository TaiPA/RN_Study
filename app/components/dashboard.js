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
import BackgroundImg from './common/background_img';

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
        <BackgroundImg>
          <View style={styles.status_panel} />
          <View style={styles.header_panel}>
            <SideMenuButton style={styles.button} onPress={() => this.toggle() }/>
            <Text style={styles.header_title}>{this.state.selectedItem}</Text>
          </View>
        </BackgroundImg>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  status_panel: {
    height: 22,
    backgroundColor: '#ffffff',
    // borderWidth: 1,
    // borderColor: 'red'
  },
  header_panel: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: 'grey',
    backgroundColor: '#ffffff'
  },
  button: {
    marginLeft: 15,
    marginRight: 20
  },
  header_title: {
    fontSize: 18,
    color: '#4a4a4a',
    backgroundColor: '#00000000'
  },
});