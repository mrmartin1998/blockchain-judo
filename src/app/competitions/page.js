// src/app/competitions/page.js
"use client";
import { useState } from "react";
import '../globals.css';

export default function CompetitionsPage() {
  const [competitionName, setCompetitionName] = useState("");
  const [competitionDate, setCompetitionDate] = useState("");
  const [resultCompetitionId, setResultCompetitionId] = useState("");
  const [firstPlace, setFirstPlace] = useState("");
  const [secondPlace, setSecondPlace] = useState("");
  const [thirdPlace, setThirdPlace] = useState("");
  const [fourthPlace, setFourthPlace] = useState("");

  // Create competition function
  const createCompetition = async () => {
    console.log(`Creating competition named ${competitionName}`);
    // Replace with Web3 logic to create competition
    // Example: await createCompetition(name, date);
    alert(`Creating competition named ${competitionName}`);
  };

  // Record competition result function
  const recordCompetitionResult = async () => {
    console.log(`Recording results for competition ID ${resultCompetitionId}`);
    // Replace with Web3 logic to record competition results
    alert(`Recording results for competition ID ${resultCompetitionId}`);
  };

  return (
    <div>
      <h2>Competitions</h2>

      {/* Create competition form */}
      <div>
        <h3>Create Competition</h3>
        <label>Competition Name:</label>
        <input
          type="text"
          value={competitionName}
          onChange={(e) => setCompetitionName(e.target.value)}
        />

        <label>Competition Date (YYYYMMDD):</label>
        <input
          type="text"
          value={competitionDate}
          onChange={(e) => setCompetitionDate(e.target.value)}
        />

        <button type="button" onClick={createCompetition}>Create</button>
      </div>

      {/* Record competition results form */}
      <div>
        <h3>Record Competition Result</h3>
        <label>Competition ID:</label>
        <input
          type="number"
          value={resultCompetitionId}
          onChange={(e) => setResultCompetitionId(e.target.value)}
        />

        <label>First Place Wallet Address:</label>
        <input
          type="text"
          value={firstPlace}
          onChange={(e) => setFirstPlace(e.target.value)}
        />

        <label>Second Place Wallet Address:</label>
        <input
          type="text"
          value={secondPlace}
          onChange={(e) => setSecondPlace(e.target.value)}
        />

        <label>Third Place Wallet Address:</label>
        <input
          type="text"
          value={thirdPlace}
          onChange={(e) => setThirdPlace(e.target.value)}
        />

        <label>Fourth Place Wallet Address:</label>
        <input
          type="text"
          value={fourthPlace}
          onChange={(e) => setFourthPlace(e.target.value)}
        />

        <button type="button" onClick={recordCompetitionResult}>Record Results</button>
      </div>
    </div>
  );
}
