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

export default class ClvBox extends Component {
    render() {
        return (
            <View style={[styles.main_panel, this.props.style]}>
                <View style={styles.title_panel}>
                    <Text style={styles.title_panel_text}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={[styles.main_child_panel, this.props.body_style]} >
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_panel: {
        alignItems: 'stretch',
        alignSelf: 'stretch',
        backgroundColor: 'rgba(248, 248, 248, 0.6)',
        borderWidth: 1,
        borderColor: '#f0f0f0',
        marginLeft: 15,
    },
    title_panel: {
        height: 46,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        borderRadius: 2,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title_panel_text: {
        fontSize: 18,
        color: '#4a4a4a'
    },
    main_child_panel: {
        flex:1
    }
});