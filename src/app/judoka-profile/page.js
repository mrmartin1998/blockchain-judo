"use client";
import { useState } from "react";
import '../globals.css';
import { judoSystem, web3 } from "../utils/web3";

const beltLevels = ["White", "Yellow", "Orange", "Green", "Blue", "Brown", "Black"];
const genders = ["Male", "Female"];
const ageCategories = ["Juveniles", "Cadets", "Juniors", "Seniors", "Veterans"];
const weightCategories = ["Under 60", "Under 66", "Under 73", "Under 81", "Under 90", "Under 100", "Over 100"];

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
        console.log(profile);
        setJudokaProfile(profile);
    } catch (error) {
        console.error("Error fetching profile:", error);
        alert("Error fetching profile. Make sure the ID is correct.");
    }
};

  const getBeltLevelName = (beltLevel) => beltLevels[beltLevel] || "Unknown";
  const getGenderName = (gender) => genders[gender] || "Unknown";
  const getAgeCategoryName = (ageCategory) => ageCategories[ageCategory] || "Unknown";
  const getWeightCategoryName = (weightCategory) => weightCategories[weightCategory] || "Unknown";

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
            <p><strong>ID:</strong> {Number(judokaProfile.basic.id)}</p>
            <p><strong>Name:</strong> {judokaProfile.basic.name}</p>
            <p><strong>Belt Level:</strong> {getBeltLevelName(judokaProfile.basic.beltLevel)}</p>
            <p><strong>Date of Birth:</strong> {`${judokaProfile.basic.birthDate.day}-${judokaProfile.basic.birthDate.month}-${judokaProfile.basic.birthDate.year}`}</p>
            <p><strong>Gender:</strong> {getGenderName(judokaProfile.basic.gender)}</p>
            <p><strong>Email:</strong> {judokaProfile.contact.email || 'N/A'}</p>
            <p><strong>Phone Number:</strong> {judokaProfile.contact.phoneNumber || 'N/A'}</p>
            <p><strong>Club:</strong> {judokaProfile.physical.club}</p>
            <p><strong>Age:</strong> {Number(judokaProfile.physical.age)} years</p>
            <p><strong>Weight:</strong> {Number(judokaProfile.physical.weight)} kg</p>
            <p><strong>Age Category:</strong> {getAgeCategoryName(judokaProfile.physical.ageCategory)}</p>
            <p><strong>Weight Category:</strong> {getWeightCategoryName(judokaProfile.physical.weightCategory)}</p>
          </div>
        ) : (
          <p>No profile data available.</p>
        )}
      </div>
    </div>
  );
}