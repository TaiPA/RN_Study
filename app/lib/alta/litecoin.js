import CoinBase from './coin-base';

export default class Litecoin extends CoinBase {
    constructor() {
        super();

        // Properties
        this.title = 'Litecoin';
        this.unitText = 'LTC';
        this.balance = 0;
        this.balanceFiat = 0;
        this.color = '#c0c4c5';
        this.icon = require('../../assets/img/coins/litecoin.png');
        this.percent = 0;
        this.address = 'Ld8H8YqWkaYiPKqZ6vgD63x5Xz7aAdQVVs';
        this.privateKey = '';
        this.historyTxs = [];
        this.unspendTxs = [];
    }
}