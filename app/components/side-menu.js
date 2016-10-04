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
    Image
} from 'react-native';

import Button from './common/button';

export default class SideMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/img/logo-mixed.png')} style={styles.logo} />
                <Button title={'Overview'} type={'main'} onPress={() => this.props.onItemSelected('overview') }/>
                <Button title={'Wallet'} type={'main'} onPress={() => this.props.onItemSelected('wallet') }/>
                <Button title={'Options'} type={'main'} onPress={() => this.props.onItemSelected('options') }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    logo: {
        marginTop: 30,
        marginBottom: 20
    }
});
