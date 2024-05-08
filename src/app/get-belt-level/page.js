// src/app/get-belt-level/page.js
"use client";
import { useState } from "react";
import '../globals.css';

export default function GetBeltLevelPage() {
  const [walletAddress, setWalletAddress] = useState("");
  const [beltLevel, setBeltLevel] = useState("");

  // Fetch belt level
  const fetchBeltLevel = async () => {
    console.log(`Fetching belt level for address ${walletAddress}`);
    // Replace with Web3 logic to fetch belt level
    // Example: setBeltLevel(await getBeltLevel(walletAddress));
    alert(`Fetching belt level for address ${walletAddress}`);
  };

  return (
    <div>
      <h2>Get Belt Level</h2>
      <label>Judoka's Wallet Address:</label>
      <input
        type="text"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
      <button type="button" onClick={fetchBeltLevel}>Get Belt Level</button>

      <div>
        {beltLevel ? <p>Belt Level: {beltLevel}</p> : <p>No belt level data available.</p>}
      </div>
    </div>
  );
}
