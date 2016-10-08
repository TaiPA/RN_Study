import CoinBase from './coin-base';

export default class Dashcoin extends CoinBase {
    constructor() {
        super();

        // Properties
        this.title = 'Dash';
        this.unitText = 'DASH';
        this.balance = 0;
        this.balanceFiat = 0;
        this.color = '#2181f4';
        this.icon = require('../../assets/img/coins/dash.png');
        this.percent = 0;
        this.address = '';
        this.privateKey = '';
        this.historyTxs = [];
        this.unspendTxs = [];
    }
}