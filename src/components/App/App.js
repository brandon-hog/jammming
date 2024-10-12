import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Tracklist from '../Tracklist/Tracklist';


function App() {

  const [userSearch, setSearch] = useState('');
  const [playlist, setPlayList] = useState('');
  const [trackList, setTrackList] = useState([]);
  const [searchResults, setSearchResults] = useState([{
      "name": "the",
      "artist": "time",
      "album": "hello",
      "id": 123,
  },
  {  "name": "the",
      "artist": "time",
      "album": "hello",
      "id": 1231,
  },
  { "name": "the",
      "artist": "time",
      "album": "hello",
      "id": 12315,
  },
  {  "name": "the",
      "artist": "time",
      "album": "hello",
      "id": 12310,
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
          <Tracklist trackList={trackList} setTrackList={setTrackList} playlist={playlist} setPlayList={setPlayList}/> 
      </div>
    </div>
  );
}

export default App;
