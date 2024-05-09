// src/app/judoka-profile/page.js
"use client";
import { useState } from "react";
import '../globals.css';
import { judoSystem, web3 } from "../utils/web3";

export default function JudokaProfilePage() {
  const [judokaId, setJudokaId] = useState("");
  const [judokaProfile, setJudokaProfile] = useState(null);

  const fetchJudokaProfile = async () => {
    try {
      const profile = await judoSystem.methods.getJudokaInfo(judokaId).call();
      setJudokaProfile(profile);
    } catch (error) {
      console.error("Error fetching profile:", error);
      alert("Error fetching profile");
    }
  };
  

  return (
    <div className="form-container">
      <h1 className="tesxt-primary">Judoka Profile</h1>
      <label>Enter Judoka ID:</label>
      <input
        type="number"
        value={judokaId}
        onChange={(e) => setJudokaId(e.target.value)}
        className="input-field"
      />
      <button type="button" onClick={fetchJudokaProfile}>Get Profile</button>

      <div>
        {judokaProfile ? (
          <div>
            <p>ID: {judokaProfile.id}</p>
            <p>Name: {judokaProfile.name}</p>
            {/* Add other profile details */}
          </div>
        ) : (
          <p>No profile data available.</p>
        )}
      </div>
    </div>
  );
}
