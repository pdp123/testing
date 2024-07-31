import React, { useState, useRef, useEffect } from 'react';
import {searchTracks} from './jamendoService.js'

const JamendoPlayer = () => {
    const [tracks, setTracks] = useState([]);
    const [query, setQuery] = useState('');
    const [currentTrack, setCurrentTrack] = useState(null);
    const audioRef = useRef(null);
  
    const handleSearch = async () => {
      const results = await searchTracks(query);
      setTracks(results);
    };
  
    const playTrack = (track) => {
      setCurrentTrack(track);
    };
  
    useEffect(() => {
      if (currentTrack && audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
      }
    }, [currentTrack]);
  
    return (
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for music"
        />
        <button onClick={handleSearch}>Search</button>
  
        <div>
          {tracks.map((track) => (
            <div key={track.id}>
              <h4>{track.name}</h4>
              <button onClick={() => playTrack(track)}>Play</button>
            </div>
          ))}
        </div>
  
        {currentTrack && (
          <div>
            <h3>Now Playing: {currentTrack.name}</h3>
            <audio ref={audioRef} controls>
              <source src={currentTrack.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    );
  };
  
  export default JamendoPlayer;