import crypto from 'crypto'
var bip39 = require('bip39');
var bitcoin = require('bitcoinjs-lib');
var HDKey = require('ethereumjs-wallet/hdkey');
var Wallet = require('ethereumjs-wallet');

export default class Ether {
    createAddr() {
        // var mnemonic = 'common creek arrive hockey pole denial bundle weather erode ride abstract finger';
        var mnemonic = 'casino develop digital nerve aisle slow inherit crawl sad evil letter sugar';
        console.log('AltaAddress: ' + 'mnemonic = ' + mnemonic);
        var seed = bip39.mnemonicToSeed(mnemonic);

        var fixturehd = HDKey.fromMasterSeed(seed);
        var hdPath = fixturehd.derivePath("m/44'/60'/0'/0").privateExtendedKey();
        console.log(hdPath);
        var fixturehd = HDKey.fromExtendedKey(hdPath);

        var hdnode = fixturehd.deriveChild(0);
        console.log('hdnode1 privateExtendedKey: ' + hdnode.privateExtendedKey())
        var w1 = Wallet.fromExtendedPrivateKey(hdnode.privateExtendedKey());
        console.log('Addr1: ' + w1.getAddressString());
    }
}