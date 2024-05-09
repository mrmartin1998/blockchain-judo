// src/app/utils/web3.js
'use client';

import Web3 from 'web3';
import JudoSystemArtifact from '/build/contracts/JudoSystem.json';

let web3;
let judoSystem;

// Contract address and ABI
const contractAddress = "0x1c38fE5122baaBa18D8420C6dFc6bEbC5EDB2062";

export function initializeWeb3() {
  if (typeof window !== 'undefined') {
    // Proceed only if we're in a client-side environment
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          web3 = new Web3(window.ethereum);
          judoSystem = new web3.eth.Contract(JudoSystemArtifact.abi, contractAddress);
          console.log(`Account detected and connected: ${accounts[0]}`);
          console.log('Smart contract is ready to interact with.');
        })
        .catch((error) => {
          console.error('User denied account access', error);
        });
    } else if (window.web3) {
      // Legacy Metamask support
      web3 = new Web3(window.web3.currentProvider);
      judoSystem = new web3.eth.Contract(JudoSystemArtifact.abi, contractAddress);
      web3.eth.getAccounts().then((accounts) => {
        if (accounts.length > 0) {
          console.log(`Legacy Metamask account detected and connected: ${accounts[0]}`);
          console.log('Smart contract is ready to interact with.');
        } else {
          console.error('No legacy Metamask account detected.');
        }
      });
    } else {
      // Fallback to Ganache
      web3 = new Web3('http://127.0.0.1:7545');
      judoSystem = new web3.eth.Contract(JudoSystemArtifact.abi, contractAddress);
      console.log('No Metamask detected. Falling back to local Ganache network.');
      web3.eth.getAccounts().then((accounts) => {
        if (accounts.length > 0) {
          console.log(`Ganache account detected and connected: ${accounts[0]}`);
          console.log('Smart contract is ready to interact with.');
        } else {
          console.error('No Ganache account detected.');
        }
      });
    }
  }
}

// Initialize Web3 immediately
initializeWeb3();

// Export Web3 and the contract instance
export { web3, judoSystem };
