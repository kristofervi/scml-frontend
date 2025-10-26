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
    <ol>
      {players.map((player) => (
        <li key={player.id}>{player.name} - {player.points}p</li>
      ))}
    </ol>
    )
  )
}

export default App
