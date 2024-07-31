import React, { useState, useEffect } from 'react';
import { searchTracks } from './jamendoService';
import SongCard from './SongCard';

const Home = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const results = await searchTracks('popular');
      console.log(results);
      setTracks(results);
    };
    fetchTracks();
  }, []);

  return (
    <div className='w-[75%] flex items-center flex-col m-auto '>
      <h2>Popular Songs</h2>
      <div className="song-list flex flex-wrap justify-center gap-10">
        {tracks.map((track) => (
          <SongCard key={track.id} song={track} />
        ))}
      </div>
    </div>
  );
};

export default Home;
