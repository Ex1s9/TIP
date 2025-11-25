import { useState } from 'react'
import './App.css'

function App() {
  const [songs, setSongs] = useState([
    { id: 1, title: 'Beware', artist: 'Deftones', url: 'https://youtu.be/FzjaN0gPvaE?si=qA-jiDiutSCQ16H5', isFavorite: false },
    { id: 2, title: 'In the End', artist: 'Linkin Park', url: 'https://www.youtube.com/watch?v=eVTXPUF4Oz4', isFavorite: true },
    { id: 3, title: 'Papercut', artist: 'Linkin Park', url: 'https://www.youtube.com/watch?v=vjVkXlxsO8Q', isFavorite: false },
    { id: 4, title: 'Comatose', artist: 'Skillet', url: 'https://youtu.be/IZ0k54ZZUHA?si=zsKtr4IO8Cj62ZbQ', isFavorite: true },
    { id: 5, title: 'Californication', artist: 'Red Hot Chili Peppers', url: 'https://www.youtube.com/watch?v=YlUKcNNmywk', isFavorite: true }
  ])

  const toggleFavorite = (id) => {
    setSongs(songs.map(song => 
      song.id === id ? { ...song, isFavorite: !song.isFavorite } : song
    ))
  }

  return (
    <div className="app">
      <h1>Любимые песни</h1>
      <div className="songs-list">
        {songs.map(song => (
          <div key={song.id} className="song-item">
            <div className="song-info">
              <a href={song.url} target="_blank" rel="noopener noreferrer" className="song-link">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </a>
            </div>
            <button 
              onClick={() => toggleFavorite(song.id)}
              className={`favorite-btn ${song.isFavorite ? 'favorited' : ''}`}
            >
              {song.isFavorite ? '❤️' : '🤍'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
