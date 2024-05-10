"use client";
import { useState } from "react";
import '../globals.css';
import { judoSystem, web3 } from "../utils/web3";

export default function PromoteJudokaPage() {
  const [judokaId, setJudokaId] = useState("");
  const [newBeltLevel, setNewBeltLevel] = useState("0");

  const handlePromoteJudoka = async () => {
    const accounts = await web3.eth.getAccounts();
    const selectedAccount = accounts[0];
  
    try {
      await judoSystem.methods
        .promoteJudoka(judokaId, newBeltLevel)
        .send({ from: selectedAccount });
  
      alert(`Judoka with ID ${judokaId} successfully promoted to level ${newBeltLevel}`);
    } catch (error) {
      console.error("Promotion failed:", error);
      alert("Promotion failed");
    }
  };
  

  return (
    <div className="form-container">
      <h1 className="text-primary">Promote Judoka</h1>
      <form>
        <label>Judoka ID:</label>
        <input type="number" className="input-field" value={judokaId} onChange={(e) => setJudokaId(e.target.value)} />

        <label>New Belt Level:</label>
        <select value={newBeltLevel} className="input-field" onChange={(e) => setNewBeltLevel(e.target.value)}>
          <option value="0">White Belt</option>
          <option value="1">Yellow Belt</option>
          <option value="2">Orange Belt</option>
          <option value="3">Green Belt</option>
          <option value="4">Blue Belt</option>
          <option value="5">Brown Belt</option>
          <option value="6">Black Belt</option>
        </select>

        <button type="button" className="button-primary" onClick={handlePromoteJudoka}>Promote</button>
      </form>
    </div>
  );
}
