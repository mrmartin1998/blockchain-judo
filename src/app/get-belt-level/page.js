// src/app/get-belt-level/page.js
"use client";
import { useState } from "react";
import '../globals.css';
import { judoSystem, web3 } from "../utils/web3";

export default function GetBeltLevelPage() {
  const [walletAddress, setWalletAddress] = useState("");
  const [beltLevel, setBeltLevel] = useState("");

  const fetchBeltLevel = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const selectedAccount = accounts[0];
  
      const beltLevel = await judoSystem.methods.getBeltLevel(judokaId).call({ from: selectedAccount });
      setBeltLevel(beltLevel);
    } catch (error) {
      console.error("Error fetching belt level:", error);
      alert("Error fetching belt level");
    }
  };
  

  return (
    <div className="form-container">
      <h1 class="text-primary">Get Belt Level</h1>
      <label>Judoka's Wallet Address:</label>
      <input
        type="text"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        className="input-field"
      />
      <button type="button" className="button-primary" onClick={fetchBeltLevel}>Get Belt Level</button>

      <div>
        {beltLevel ? <p>Belt Level: {beltLevel}</p> : <p>No belt level data available.</p>}
      </div>
    </div>
  );
}
