import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import JamendoPlayer from './components/JamendoPlayer';
// import Playlists from './components/Playlists';
// import Favorites from './components/Favorites';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      
      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/playlists" element={<Playlists />} /> */}
          {/* <Route path="/favorites" element={<Favorites />} /> */}
          <Route path="/player" element={<JamendoPlayer />} />
        </Routes>
    </Router>
  );
}

export default App;
