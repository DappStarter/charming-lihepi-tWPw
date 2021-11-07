require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember minor half clog bottom ghost'; 
let testAccounts = [
"0x64eaaa243f5aa4e7c3b60be4659e104441babf15b01e5f63b960d9201148b984",
"0xca8c84e4c7585ba6b676b89c41074411bd63038c530a797cca370030ac069fd4",
"0xa1dbeee034c4fffc5f60bc53ada2c94ea955d0f0fca20d3918bee2ac397e10a6",
"0x2b3fbe6615feed9970004ebfd870dae8b99d91ff5d615b0a8fae960412534021",
"0xbf0ed7e487c1694ab806b7ddb67572b92199424dd9ae2ec15c05f63eeee187c5",
"0x744d36b7c8983874e77f96733504fa07c30c986f1f1212a657f7874ace1ae4d7",
"0xde979c11e685b61041b10ee3585be92b3c7b6c48b7aed02d2a23e918ddc71a70",
"0x1ea3e74d17d0325017d5ce3bfdb8c5243c93d515fec93fc4f0c59b232c62a41f",
"0x047c1dbf2d259df08513e1f0ba7c04e8681ec4f31fdef1fc5d60530375a856e1",
"0x7c1c6615cb765df2f354047a001c85497835709e8d1c435e92133116baeaa926"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


