import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
  fetch('https://scml-backend.onrender.com/players')
    .then((response) => response.json())
    .then((result) => {
      setPlayers(result)
    })
}, [])

  return (
    players && (
      <div>
      <h1>NHL Stats Leaders 2025 Season</h1>
    <ol>
      {players.map((player) => (
        <li key={player.id}>{player.name} - {player.points}p</li>
      ))}
    </ol>
    <p style={{display: 'flex', justifyContent: 'flex-end', fontWeight: 'bold'}}>
      2025-10/26</p>
    </div>
    )
  )
  
}

export default App
