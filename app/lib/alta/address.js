import crypto from 'crypto'

export default class AltaAddress {
    createPassphases() {
        var bip39 = require('bip39');

        // Generate a random mnemonic using crypto.randomBytes
        var mnemonic = bip39.generateMnemonic(null, crypto.randomBytes, null); // strength defaults to 128 bits
        console.log('AltaAddress: ' + 'mnemonic = ' + mnemonic);

        return mnemonic;
    }

    createAddressBTC() {

    }
}