'use client'
import Web3 from "web3";
import JudoSystemArtifact from "/build/contracts/JudoSystem.json";

// Set up Web3 instance with Ganache
const web3 = new Web3("http://127.0.0.1:7545");

// Contract address and ABI
const contractAddress = "0xe81B400F0C1bbf392353Df21Acb580821a311b4E";
const judoSystem = new web3.eth.Contract(JudoSystemArtifact.abi, contractAddress);

// Export for use throughout your dApp
export { web3, judoSystem };
