// src/app/leaderboards/page.js
"use client";
import { useEffect, useState } from "react";
import '../globals.css';

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
    <div>
      <h2>Judoka Leaderboards</h2>
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
