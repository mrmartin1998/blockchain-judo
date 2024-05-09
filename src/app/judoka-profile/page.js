// src/app/judoka-profile/page.js
"use client";
import { useState } from "react";
import '../globals.css';

export default function JudokaProfilePage() {
  const [judokaId, setJudokaId] = useState("");
  const [judokaProfile, setJudokaProfile] = useState(null);

  // Fetch profile data
  const fetchJudokaProfile = async () => {
    console.log(`Fetching profile for judoka with ID ${judokaId}`);
    // Replace with Web3 logic to fetch profile data
    // Example: setJudokaProfile(await getProfile(judokaId));
    alert(`Fetching profile for judoka with ID ${judokaId}`);
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
