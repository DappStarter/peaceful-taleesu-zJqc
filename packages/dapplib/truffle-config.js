require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind method hockey clinic fresh twice'; 
let testAccounts = [
"0xaf489fcf1f9874d9b5e6459aef819ff51998e3f200e1909743eb65a0fb835cd2",
"0x45eb4529c79190aedeed04865ae56c7bea2545bb60e2c972dd34f9533547a950",
"0x675a72d577dbf3cb6f7fe2a34933161640d85c96d7e2e3cd0e306f8e8431a02e",
"0xf288b6637c5f34add97f239043371beb51802014f84c3119658a0be81072f598",
"0x909c58f0e373076d1e9482b43e04043ea533deb569f8f44d98e6ee9c20683c01",
"0xf6296d9cc6bff801b389f01975f3696d3e9518cca383544c6c75430754d6856a",
"0x924d43890da92224658e0ff20976d9df8c87af3a79bd3cef89ce951cf51027e1",
"0x790635536b517d2d397b507b86c623c82da88c71bb982c6d61575491083febd7",
"0xc4a95367f4806e58d9566abc4bbad9258fc871325347369637157fad05452bc6",
"0x07e47680a3644462d26062a69b9f61095c4e5355cb96f5d9ad6992c1f0106f3a"
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


