import React, { useEffect, useState } from 'react';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const data = [{"team": "CSK", "matches": 14, "wins": 10, "losses": 4, "nrr": 0.45, "points": 20}, {"team": "MI", "matches": 14, "wins": 9, "losses": 5, "nrr": 0.2, "points": 18}, {"team": "RCB", "matches": 14, "wins": 8, "losses": 6, "nrr": 0.15, "points": 16}, {"team": "RR", "matches": 14, "wins": 8, "losses": 6, "nrr": 0.18, "points": 16}, {"team": "KKR", "matches": 14, "wins": 7, "losses": 7, "nrr": -0.05, "points": 14}, {"team": "PBKS", "matches": 14, "wins": 6, "losses": 8, "nrr": -0.2, "points": 12}, {"team": "SRH", "matches": 14, "wins": 6, "losses": 8, "nrr": -0.3, "points": 12}, {"team": "DC", "matches": 14, "wins": 5, "losses": 9, "nrr": -0.4, "points": 10}, {"team": "GT", "matches": 14, "wins": 11, "losses": 3, "nrr": 0.52, "points": 22}, {"team": "LSG", "matches": 14, "wins": 9, "losses": 5, "nrr": 0.3, "points": 18}, {"team": "XYZ", "matches": 14, "wins": 4, "losses": 10, "nrr": -0.6, "points": 8}, {"team": "ABC", "matches": 14, "wins": 3, "losses": 11, "nrr": -0.7, "points": 6}];
    const sortedData = data.sort((a, b) => a.nrr - b.nrr);
    setTeams(sortedData);
  }, []);

  return (
  <div style={{ padding: "20px" }}>
    <h2>IPL 2022 Points Table</h2>
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Team</th>
          <th>Matches</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>NRR</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={index}>
            <td>{team.team}</td>
            <td>{team.matches}</td>
            <td>{team.wins}</td>
            <td>{team.losses}</td>
            <td>{team.nrr}</td>
            <td>{team.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

}
export default App;
