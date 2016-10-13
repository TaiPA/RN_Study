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
import Utils from '../../utils';
// import Api from '../api/api';


export default class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      bitcoin: new Bitcoin(),
      litecoin: new Litecoin(),
      dogecoin: new Dogecoin(),
      dashcoin: new Dashcoin(),
      ethereum: new Ethereum(),
    }
  }

  componentWillMount() {
    console.log('componentWillMount');
    // this.getBTCBalance();
    // this.getLTCBalance();
    this.getBalance();
    this.getBalanceETH();
    // let btc = this.state.bitcoin;
    // Api(btc.address).
    //   then((balance) => {
    //     btc.balance = balance;
    //     this.setState({ bitcoin: btc });
    //   });
    // btc.balance = 0.002;
    // this.setState({ bitcoin: btc });
  }

  render() {
    // let bitcoin = new Bitcoin();
    // bitcoin.getBalance();
    // let litecoin = new Litecoin();
    // let dogecoin = new Dogecoin();
    // let dashcoin = new Dashcoin();
    // let ethereum = new Ethereum();

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
        {this.coinItem(this.state.bitcoin)}
        {this.coinItem(this.state.ethereum)}
        {this.coinItem(this.state.litecoin)}
        {this.coinItem(this.state.dogecoin)}
        {this.coinItem(this.state.dashcoin)}
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
            <Icon name='angle-right' style={styles.coin_panel_right_icon} size={20} />
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  onPressBtnNext() {
    console.log('Press next button');
  }

  getBTCBalance() {
    let url = 'https://apitest.altaapps.io:8083/api/get_address_balance/BTC/' + this.state.bitcoin.address;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('Bitcoin:getBalance:confirmed_balance: ' + responseJson.data.confirmed_balance);
        let btc = this.state.bitcoin;
        btc.balance = responseJson.data.confirmed_balance;
        this.setState({
          bitcoin: btc
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getLTCBalance() {
    let url = 'https://apitest.altaapps.io:8083/api/get_address_balance/LTC/' + this.state.litecoin.address;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('Bitcoin:getBalance:confirmed_balance: ' + responseJson.data.confirmed_balance);
        let ltc = this.state.litecoin;
        ltc.balance = responseJson.data.confirmed_balance;
        this.setState({
          litecoin: ltc
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getBalance() {
    let url = 'https://apitest.altaapps.io:8083/api';
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{
        call: 'getBalance',
        data: [
          {
            network: 'BTC',
            addresses: [this.state.bitcoin.address]
          },
          {
            network: 'LTC',
            addresses: [this.state.litecoin.address]
          },
          {
            network: 'DOGE',
            addresses: [this.state.dogecoin.address]
          },
          {
            network: 'DASH',
            addresses: [this.state.dashcoin.address]
          }
        ],
      }])
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

        let btc = this.state.bitcoin;
        // btc.balance = responseJson.getBalance.BTC.
        let ltc = this.state.litecoin;
        let doge = this.state.dogecoin;
        let dash = this.state.dashcoin;


        btc.balance = Utils.formatNumber('BTC', this.parseBalance(responseJson.getBalance.BTC));
        ltc.balance = Utils.formatNumber('LTC', this.parseBalance(responseJson.getBalance.LTC));
        doge.balance = Utils.formatNumber('DOGE', this.parseBalance(responseJson.getBalance.DOGE));
        dash.balance = Utils.formatNumber('DASH', this.parseBalance(responseJson.getBalance.DASH));

        this.setState({
          bitcoin: btc,
          litecoin: ltc,
          dogecoin: doge,
          dashcoin: dash
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  parseBalance(data) {
    for (i in data) {
      return data[i].balance;
    }

  }

  getBalanceETH() {
    //https://api.etherscan.io/api?module=account&action=balance&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&tag=latest&apikey=YourApiKeyToken
    // API key : BGZ7995PJVHFRB7KGQRKWMFRU5UQQMCQWB
    let url = 'https://api.etherscan.io/api?module=account&action=balance&address=' + this.state.ethereum.address + '&tag=latest&apikey=BGZ7995PJVHFRB7KGQRKWMFRU5UQQMCQWB'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        let balance = Utils.formatNumber('ETH', responseJson.result / Math.pow(10, 18));
        let eth = this.state.ethereum;
        eth.balance = balance;
        this.setState({
          ethereum: eth
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
