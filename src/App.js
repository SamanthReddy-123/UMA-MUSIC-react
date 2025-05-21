import React, { useRef, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

const songs = [
  {
    id: 1,
    title: "Sample Beat",
    src: "songs/song1.mp3",
  },
 
];

function App() {
  const [current, setCurrent] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app">
      <header>
        <img src={logo} alt="UMA Logo" className="logo" />
        <h1>UMA - Unified Music App</h1>
      </header>
      <div className="player">
        <h2>{current.title}</h2>
        <audio ref={audioRef} src={current.src} onEnded={() => setIsPlaying(false)} />
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      </div>
      <div className="playlist">
        {songs.map((song) => (
          <p key={song.id} onClick={() => setCurrent(song)}>
            {song.title}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;