/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Button from './common/button';

export default class SideMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title={'Overview'} type={'main'} onPress={this.onItemSelect() }/>
                <Button title={'Wallet'} type={'main'} onPress={this.onItemSelect() }/>
                <Button title={'Option'} type={'main'} onPress={this.onItemSelect() }/>
            </View>
        );
    }

    onItemSelect() {
        console.log('menu:');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
