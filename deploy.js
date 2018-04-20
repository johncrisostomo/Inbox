const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const { accountMneumonic, infuraApiKey } from './settings.json';

const network = 'rinkeby';
const INFURA_API_URI = `https://${network}.infura.io/${infuraApiKey}`

const provider = new HDWalletProvider(
    accountMneumonic,
    INFURA_API_URI
);

const web3 = new Web3(provider);
