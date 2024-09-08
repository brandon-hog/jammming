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
  const [trackList, setTrackList] = useState([]);
  const [track, setTrack] = useState({});
  const [searchResults, setSearchResults] = useState([{
      "name": "the",
      "artist": "time",
      "album": "hello",
      "id": 12312,
  },
  {  "name": "the",
      "artist": "time",
      "album": "hello",
      "id": 12312,
  },
  { "name": "the",
      "artist": "time",
      "album": "hello",
      "id": 12312,
  },
  {  "name": "the",
      "artist": "time",
      "album": "hello",
      "id": 12312,
  },
  ]);



  return (
    <div className="App">
      <header className="App-header">
        <p>Jammming</p>
        <SearchBar userSearch={userSearch} setSearch={setSearch}/>
      </header>
      <div class="main">
        <SearchResults searchResults={searchResults} setSearchResults={setSearchResults} setTrackList={setTrackList}/>
        <Playlist />
        <div class="trackcontent">
          <Track track={track}/>
          <Tracklist trackList={trackList}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
