// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

let accounts;
beforeEach(async () => {
    // Get a list of accounts
    accounts = await web3.eth.getAccounts();

    // Use one of the account to deploy contract
});

describe('Inbox', () => {
    it('deploy contract', () => {
        console.log(accounts);
    })
})