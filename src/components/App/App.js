import React, { useState } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Track from '../Track/Track';
import Tracklist from '../Tracklist/Tracklist';

function App() {

  const [userSearch, setSearch] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar userSearch={userSearch} setSearch={setSearch}/>
      </header>
      <div class="main">
        <SearchResults />
        <Playlist />
        <div class="trackcontent">
          <Track />
          <Tracklist /> 
        </div>
      </div>
    </div>
  );
}

export default App;
