import crypto from 'crypto'
var bip39 = require('bip39');
var bitcoin = require('bitcoinjs-lib');

export default class AltaAddress {
    createPassphases() {
        // Generate a random mnemonic using crypto.randomBytes
        var mnemonic = bip39.generateMnemonic(null, crypto.randomBytes, null); // strength defaults to 128 bits
        console.log('AltaAddress: ' + 'mnemonic = ' + mnemonic);

        return mnemonic;
    }

    createAddressBTC(mnemonic) {
    	// what is accurately described as the wallet seed
	   var seed = bip39.mnemonicToSeed(mnemonic);

	   console.log("======================BTC=======================");
	   var bitcoinNetwork = bitcoin.networks.bitcoin
	   var hdMaster = bitcoin.HDNode.fromSeedBuffer(seed, bitcoinNetwork) // seed from above

	   var key1 = hdMaster.derivePath('m/0')
	   // var key2 = hdMaster.derivePath('m/1')

	   console.log("Key1 : " + key1.keyPair.toWIF());
	   // console.log("Key2 : " + key2.keyPair.toWIF());
	   console.log("Addr1 : " + key1.getAddress());
	   // console.log("Addr2 : " + key2.getAddress());

	   return key1.getAddress();
    }
}