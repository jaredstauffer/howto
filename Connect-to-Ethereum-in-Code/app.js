/** 
 * HOW TO Connect to the Ethereum Blockchain in Code
 * 
 * REQUIRES: NPM, Node.js, Web3.js, an Infura.io account (see https://infura.io)
 *  
 *           NPM and Node.js - https://www.npmjs.com/get-npm
 * 
 *           Web3.js install: $ npm install web3
 *           https://www.npmjs.com/package/web3 
 * 
 *           Infura - create a free account, go to dashboard, by ENDPOINT select MAINNET, 
 *           copy the end point URL, put it in the code below
 * 
 * TO RUN: node app.js
 * 
 * EXPECTED OUTPUT: a number (the latest block number, example: 7241437)
 * 
 * @ Part of the How to ... (in code) Series By Jared Stauffer 
 * https://github.com/jaredstauffer
 * https://twitter.com/jaredstauffer
 */

// import the Web3 library
const Web3 = require('web3');

// URL of the blockchain network
var url = 'YOUR-URL'; // replace with your Infura URL

// create the connection
var web3 = new Web3(url);

// you have now created a connection to the Ethereum Blockchain Mainnet

// to test the conenection we will get the latest block number
web3.eth.getBlockNumber().then(console.log);
