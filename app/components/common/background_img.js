/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';

export default class BackgroundImg extends Component {
    render() {
        return (
            <Image source={require('../../assets/img/background@2x.png') }
                style={[styles.background_img, this.props.style]}>
                {this.props.children}
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    background_img: {
        flex: 1,
        width: null,
        height: null
    }
});