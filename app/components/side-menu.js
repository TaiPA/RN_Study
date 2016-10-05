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
    Image,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from './common/button';

export default class SideMenu extends Component {
    // Overview : pie-chart
    // Wallet : btc
    // History : History
    // Contact : users
    // Backup : cloud-upload
    // Options : cog
    // Help : comments-o
    constructor(props) {
        super(props);
        this.state = { selectedItem: 'Overview' };
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/img/logo-mixed.png') } style={styles.logo} />
                {this.menuItem('pie-chart', 'Overview') }
                {this.menuItem('btc', 'Wallet') }
                {this.menuItem('history', 'History') }
                {this.menuItem('users', 'Contact') }
                {this.menuItem('cloud-upload', 'Backup') }
                {this.menuItem('cog', 'Options') }
                {this.menuItem('comments-o', 'Helps') }
            </View>
        );
    }

    menuItem(iconName, title) {
        return (
            <TouchableHighlight
                onPress={() => {
                    this.props.onItemSelected(title);
                    this.setState({ selectedItem: title });
                } }
                style={this.state.selectedItem !== title ? styles.menuItemContainer : styles.menuItemContainer_selected}
                underlayColor='#cccccc'>
                <View style={styles.menuItem}>
                    <Icon name={iconName} style={this.state.selectedItem !== title ? styles.icon : styles.icon_selected}/>
                    <Text style={this.state.selectedItem !== title ? styles.menuItemTitle : styles.menuItemTitle_selected}>{title}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    selectItem(title) {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    logo: {
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    menuItemContainer: {
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 3,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#00000000',
    },
    menuItemContainer_selected: {
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 3,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#a0a0a0',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00000000',
        alignSelf: 'stretch',
        flex: 1,
    },
    icon: {
        fontSize: 16,
        width: 40,
        textAlign: 'center',
        color: '#4a4a4a',
    },
    icon_selected: {
        fontSize: 16,
        width: 40,
        textAlign: 'center',
        color: '#ffffff',
    },
    menuItemTitle: {
        color: '#4a4a4a',
        fontWeight: 'bold',
        fontSize: 14
    },
    menuItemTitle_selected: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#ffffff',
    }
});
