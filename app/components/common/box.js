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

export default class Sample extends Component {
    render() {
        return (
            <View style={styles.main_panel}>
                <View style={styles.title_panel}>
                    <Text style={styles.title_panel_text}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    main_panel: {
        alignItems: 'center',
        backgroundColor: 'rgba(248, 248, 248, 0.6)',
        borderWidth: 1,
        borderColor: '#f0f0f0',
        marginLeft: 15,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },
    title_panel: {
        alignSelf: 'stretch',
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
});
