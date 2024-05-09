// src/app/judoka-profile/page.js
"use client";
import { useState } from "react";
import '../globals.css';
import { judoSystem } from "../utils/web3";

// Map numeric belt levels to their corresponding names
const beltLevels = ["White", "Yellow", "Orange", "Green", "Blue", "Brown", "Black"];

export default function JudokaProfilePage() {
  const [judokaId, setJudokaId] = useState("");
  const [judokaProfile, setJudokaProfile] = useState(null);

  const fetchJudokaProfile = async () => {
    if (!judokaId) {
      alert("Please provide a valid Judoka ID.");
      return;
    }

    try {
      const profile = await judoSystem.methods.getJudokaInfo(judokaId).call();
      setJudokaProfile(profile);
    } catch (error) {
      console.error("Error fetching profile:", error);
      alert("Error fetching profile. Make sure the ID is correct.");
    }
  };

  // Function to get the belt level name from the numeric value
  const getBeltLevelName = (beltLevel) => beltLevels[beltLevel] || "Unknown";

  return (
    <div className="form-container">
      <h1 className="text-primary">Judoka Profile</h1>
      <label>Enter Judoka ID:</label>
      <input
        type="number"
        value={judokaId}
        onChange={(e) => setJudokaId(e.target.value)}
        className="input-field"
      />
      <button type="button" className="button-primary" onClick={fetchJudokaProfile}>
        Get Profile
      </button>

      <div>
        {judokaProfile ? (
          <div>
            <p><strong>ID:</strong> {judokaProfile.basic.id}</p>
            <p><strong>Name:</strong> {judokaProfile.basic.name}</p>
            <p><strong>Belt Level:</strong> {getBeltLevelName(judokaProfile.basic.beltLevel)}</p>
            <p><strong>Date of Birth:</strong> {`${judokaProfile.basic.birthDate.day}-${judokaProfile.basic.birthDate.month}-${judokaProfile.basic.birthDate.year}`}</p>
            <p><strong>Gender:</strong> {judokaProfile.basic.gender}</p>
            <p><strong>Email:</strong> {judokaProfile.contact.email || 'N/A'}</p>
            <p><strong>Phone Number:</strong> {judokaProfile.contact.phoneNumber || 'N/A'}</p>
            <p><strong>Club:</strong> {judokaProfile.physical.club}</p>
            <p><strong>Age:</strong> {judokaProfile.physical.age}</p>
            <p><strong>Weight:</strong> {judokaProfile.physical.weight} kg</p>
            <p><strong>Age Category:</strong> {judokaProfile.physical.ageCategory}</p>
            <p><strong>Weight Category:</strong> {judokaProfile.physical.weightCategory}</p>
          </div>
        ) : (
          <p>No profile data available.</p>
        )}
      </div>
    </div>
  );
}
