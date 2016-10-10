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
  TouchableHighlight
} from 'react-native';

// import AltaAddress from '../lib/alta/address';
// import Button from './common/button';
// import ClvBox from './common/clv-box';
// import CommonStyle from './styles/common';
// import BackgroundImg from './common/background_img';
import Icon from 'react-native-vector-icons/FontAwesome';
import Bitcoin from '../../lib/alta/bitcoin';
import Litecoin from '../../lib/alta/litecoin';
import Dogecoin from '../../lib/alta/dogecoin';
import Dashcoin from '../../lib/alta/dashcoin';
import Ethereum from '../../lib/alta/ethereum';


export default class Wallet extends Component {
  constructor() {
    super();
    this.state = { bitcoin: new Bitcoin() }
  }

  componentWillMount() {
    let btc = this.state.bitcoin;
    btc.getBalance().
      then((balance) => {
        btc.balance = balance;
        this.setState({ bitcoin: btc });
      });
    // btc.balance = 0.002;
    // this.setState({ bitcoin: btc });
  }

  render() {
    // let bitcoin = new Bitcoin();
    // bitcoin.getBalance();
    let litecoin = new Litecoin();
    let dogecoin = new Dogecoin();
    let dashcoin = new Dashcoin();
    let ethereum = new Ethereum();
    console.log(this.state.bitcoin.title);

    return (
      <View>
        <View style={styles.flexRow}>
          <View style={styles.total_balance_panel}>
            <Text style={styles.total_balance_text}>Total Balance</Text>
            <Text style={styles.total_balance_value}>$13, 883.09</Text>
          </View>
          <View style={styles.chart}>
            <View style={styles.chart_tmp} />
          </View>
        </View>
        {this.coinItem(this.state.bitcoin) }
        {this.coinItem(ethereum) }
        {this.coinItem(litecoin) }
        {this.coinItem(dogecoin) }
        {this.coinItem(dashcoin) }
      </View>
    );
  }

  coinItem(coin) {
    const coin_title_color = 'color:' + coin.color;
    return (
      <TouchableHighlight onPress={() => { } }
        style={[styles.coin_btn]}
        underlayColor='#cccccc'>
        <View style={styles.coin_panel}>
          <View style={styles.flexRow}>
            <Image source={coin.icon} style={styles.coin_panel_icon} />
            <View style={styles.coin_panel_name}>
              <Text style={[styles.coin_panel_coin_name, { color: coin.color }]}>{coin.title}</Text>
              <Text style={[styles.coin_panel_coin_persent, { color: coin.color }]}>{coin.percent}%</Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <View style={styles.coin_panel_value}>
              <Text style={styles.coin_panel_fiat_value}>{coin.balanceFiat}</Text>
              <Text style={styles.coin_panel_coin_value}>{coin.balance} {coin.unitText}</Text>
            </View>
            <Icon name='angle-right' style={styles.coin_panel_right_icon} size={20}/>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  onPressBtnNext() {
    console.log('Press next button');
  }
}

const styles = StyleSheet.create({
  container: {

  },
  coin_btn: {
    height: 58,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 2,
    marginTop: 2,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: 'white'
  },
  coin_panel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coin_panel_icon: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
    marginLeft: 20,
    marginRight: 10
  },
  coin_panel_name: {

  },
  coin_panel_coin_name: {
    fontSize: 14,
    marginBottom: 2,
  },
  coin_panel_coin_persent: {
    fontSize: 16,
  },
  coin_panel_value: {

  },
  coin_panel_fiat_value: {
    fontSize: 18,
    marginBottom: 4,
    textAlign: 'right',
    color: '#4a4a4a'
  },
  coin_panel_coin_value: {
    fontSize: 12,
    textAlign: 'right',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  coin_panel_right_icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 18,
    marginRight: 10,
    color: '#4a4a4a'
  },
  total_balance_panel: {
    flex: 1,
    marginLeft: 20
  },
  total_balance_text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#a0a0a0'
  },
  total_balance_value: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#424242'
  },
  chart: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart_tmp: {
    height: 140,
    width: 140,
    borderWidth: 25,
    borderRadius: 70,
    borderColor: '#ebebeb'
  },
  button_panel: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10
  },
  blank_footer_panel: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
