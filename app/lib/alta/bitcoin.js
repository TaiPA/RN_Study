import CoinBase from './coin-base';

export default class Bitcoin extends CoinBase {
    constructor() {
        super();

        // Properties
        this.title = 'Bitcoin';
        this.unitText = 'BTC';
        this.balance = 0;
        this.balanceFiat = 0;
        this.color = '#f6931a';
        this.icon = require('../../assets/img/coins/bitcoin.png');
        this.percent = 0;
        this.address = '1L2zSwsbkbY9nqGeq1tGurWP1BQekUF9v9';
        this.privateKey = '';
        this.historyTxs = [];
        this.unspendTxs = [];

        this.getBalance();
    }

    getBalance() {
        let url = 'https://apitest.altaapps.io:8083/api/get_address_balance/BTC/' + this.address;
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('Bitcoin:getBalance:confirmed_balance: ' + responseJson.data.confirmed_balance);
                this.balance = responseJson.data.confirmed_balance;
            })
            .catch((error) => {
                console.error(error);
            });
    }


}