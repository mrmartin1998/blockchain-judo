// src/app/leaderboards/page.js
"use client";
import { useEffect, useState } from "react";
import '../globals.css';
import { judoSystem, web3 } from "../utils/web3";

export default function LeaderboardsPage() {
  const [leaderboard, setLeaderboard] = useState([]);

  // Fetch leaderboard data
  const fetchLeaderboard = async () => {
    console.log("Fetching leaderboard data");
    // Here you would use Web3 calls to fetch judokas and their points
    // Example: setLeaderboard(await fetchLeaderboardData());
  };

  useEffect(() => {
    fetchLeaderboard(); // Fetch leaderboard data on component mount
  }, []);

  return (
    <div className="form-container">
      <h1 className="text-primary">Judoka Leaderboards</h1>
      <div>
        {leaderboard.length > 0 ? (
          leaderboard.map((judoka) => (
            <p key={judoka.id}>
              {judoka.name} - {judoka.beltLevel} (ID: {judoka.id}) - Points: {judoka.points}
            </p>
          ))
        ) : (
          <p>No leaderboard data available.</p>
        )}
      </div>
    </div>
  );
}
