"use client";
import { useState } from "react";
import '../globals.css';
import { judoSystem, web3 } from "../utils/web3";

export default function CompetitionsPage() {
  const [competitionName, setCompetitionName] = useState("");
  const [competitionDate, setCompetitionDate] = useState("");
  const [resultCompetitionId, setResultCompetitionId] = useState("");
  const [firstPlace, setFirstPlace] = useState("");
  const [secondPlace, setSecondPlace] = useState("");
  const [thirdPlace, setThirdPlace] = useState("");
  const [fourthPlace, setFourthPlace] = useState("");

  const createCompetition = async () => {
    const accounts = await web3.eth.getAccounts();
    const selectedAccount = accounts[0];
  
    const [year, month, day] = competitionDate.split("-");
  
    try {
      await judoSystem.methods
        .createCompetition(competitionName, parseInt(day), parseInt(month), parseInt(year))
        .send({ from: selectedAccount });
  
      alert(`Competition ${competitionName} created successfully`);
    } catch (error) {
      console.error("Error creating competition:", error);
      alert("Error creating competition");
    }
  };
  

  // Record competition result function
  const recordCompetitionResult = async () => {
    console.log(`Recording results for competition ID ${resultCompetitionId}`);
    alert(`Recording results for competition ID ${resultCompetitionId}`);
  };

  return (
    <div className="form-container">
      <h1 className="text-primary">Competitions</h1>

      {/* Create competition form */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Create Competition</h3>
        <div className="mb-4">
          <label className="block mb-1">Competition Name:</label>
          <input
            type="text"
            value={competitionName}
            onChange={(e) => setCompetitionName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Competition Date (YYYYMMDD):</label>
          <input
            type="text"
            value={competitionDate}
            onChange={(e) => setCompetitionDate(e.target.value)}
            className="input-field"
          />
        </div>
        <button
          type="button"
          className="button-primary"
          onClick={createCompetition}
        >
          Create
        </button>
      </div>

      {/* Record competition results form */}
      <div>
        <h3 className="font-semibold mb-4">Record Competition Result</h3>
        <div className="mb-4">
          <label className="block mb-1">Competition ID:</label>
          <input
            type="number"
            value={resultCompetitionId}
            onChange={(e) => setResultCompetitionId(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">First Place Wallet Address:</label>
          <input
            type="text"
            value={firstPlace}
            onChange={(e) => setFirstPlace(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Second Place Wallet Address:</label>
          <input
            type="text"
            value={secondPlace}
            onChange={(e) => setSecondPlace(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Third Place Wallet Address:</label>
          <input
            type="text"
            value={thirdPlace}
            onChange={(e) => setThirdPlace(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Fourth Place Wallet Address:</label>
          <input
            type="text"
            value={fourthPlace}
            onChange={(e) => setFourthPlace(e.target.value)}
            className="input-field"
          />
        </div>
        <button
          type="button"
          className="button-primary"
          onClick={recordCompetitionResult}
        >
          Record Results
        </button>
      </div>
    </div>
  );
}
