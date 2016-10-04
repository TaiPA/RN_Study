import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity
} from 'react-native';

export default class SideMenuButton extends Component {
    handlePress(e) {
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.handlePress.bind(this) }
                style={this.props.style}>
                <Image
                    source={require('../../assets/img/menu.png') }
                    style={{ width: 32, height: 32 }} />
            </TouchableOpacity>
        );
    }
}