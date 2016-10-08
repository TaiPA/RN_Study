import CoinBase from './coin-base';

export default class Dogecoin extends CoinBase {
    constructor() {
        super();

        // Properties
        this.title = 'Dogecoin';
        this.unitText = 'DOGE';
        this.balance = 0;
        this.balanceFiat = 0;
        this.color = '#ba9f33';
        this.icon = require('../../assets/img/coins/dogecoin.png');
        this.percent = 0;
        this.address = '';
        this.privateKey = '';
        this.historyTxs = [];
        this.unspendTxs = [];
    }
}