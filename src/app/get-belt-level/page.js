"use client";
import { useState } from "react";
import '../globals.css';
import { judoSystem, web3 } from "../utils/web3";

const beltLevels = ["White", "Yellow", "Orange", "Green", "Blue", "Brown", "Black"];

export default function GetBeltLevelPage() {
  const [walletAddress, setWalletAddress] = useState("");
  const [beltLevel, setBeltLevel] = useState("");

  const fetchBeltLevel = async () => {
    try {
      if (!web3 || !judoSystem) {
        alert('Web3 or the contract is not yet initialized.');
        return;
      }

      console.log("Using wallet address:", walletAddress);

      const accounts = await web3.eth.getAccounts();
      const selectedAccount = accounts[0];
      console.log("Selected account:", selectedAccount);

      if (!walletAddress || walletAddress.length !== 42 || !walletAddress.startsWith("0x")) {
        alert("Please enter a valid Ethereum wallet address.");
        return;
      }

      const judokaId = await judoSystem.methods.getJudokaIdByWallet(walletAddress).call({ from: selectedAccount });
      console.log("Found Judoka ID:", judokaId);

      const beltLevelNumeric = await judoSystem.methods.getBeltLevel(judokaId).call({ from: selectedAccount });
      console.log("Numeric Belt Level:", beltLevelNumeric);

      setBeltLevel(beltLevels[beltLevelNumeric] || "Unknown");
    } catch (error) {
      console.error("Error fetching belt level:", error);
      alert("Error fetching belt level. Please verify that the wallet address is correct.");
    }
  };

  return (
    <div className="form-container">
      <h1 className="text-primary">Get Belt Level</h1>
      <label>Judoka's Wallet Address:</label>
      <input
        type="text"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        className="input-field"
      />
      <button type="button" className="button-primary" onClick={fetchBeltLevel}>
        Get Belt Level
      </button>

      <div>
        {beltLevel ? <p><strong>Belt Level:</strong> {beltLevel}</p> : <p>No belt level data available.</p>}
      </div>
    </div>
  );
}
