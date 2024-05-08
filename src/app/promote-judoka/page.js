// src/app/promote-judoka/page.js
"use client";
import { useState } from "react";
import '../globals.css';

export default function PromoteJudokaPage() {
  const [judokaId, setJudokaId] = useState("");
  const [newBeltLevel, setNewBeltLevel] = useState("0");

  const handlePromoteJudoka = async () => {
    console.log(`Promoting judoka with ID ${judokaId} to level ${newBeltLevel}`);
    // Replace with Web3 promotion logic
    alert(`Promoting judoka with ID ${judokaId} to level ${newBeltLevel}`);
  };

  return (
    <div>
      <h2>Promote Judoka</h2>
      <form>
        <label>Judoka ID:</label>
        <input type="number" value={judokaId} onChange={(e) => setJudokaId(e.target.value)} />

        <label>New Belt Level:</label>
        <select value={newBeltLevel} onChange={(e) => setNewBeltLevel(e.target.value)}>
          <option value="0">White Belt</option>
          <option value="1">Yellow Belt</option>
          <option value="2">Orange Belt</option>
          <option value="3">Green Belt</option>
          <option value="4">Blue Belt</option>
          <option value="5">Brown Belt</option>
          <option value="6">Black Belt</option>
        </select>

        <button type="button" onClick={handlePromoteJudoka}>Promote</button>
      </form>
    </div>
  );
}
