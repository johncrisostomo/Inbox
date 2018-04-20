const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let fetchedAccounts;
let inbox;

beforeEach(async () => {
    // get test accounts
    fetchedAccounts = await web3.eth.getAccounts();

    // deploy our contract to the test network
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments:[ 'Hello world!' ] })
        .send({ from: fetchedAccounts[0], gas: '1000000' });

    inbox.setProvider(provider);
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });
})