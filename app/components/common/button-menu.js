import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

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
                <Icon name={'navicon'} style={[styles.button]}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        // width: 30,
        // height: 30,
        fontSize: 25,
        textAlign: 'center',
        // borderWidth:1,
        // borderColor:'red'
    }
});