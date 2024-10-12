import search from './SearchResults.module.css';

// this function should populate the component with results the user searched.
function SearchResults(props) {

    // this function will add a clicked song into the tracklist.
    function addHandler(song) {
        props.setTrackList((prevItems) => [...prevItems, song])
    }

    // maps all of the songs in the playlist into elements
    function songHandler(searchResults) {

        return searchResults.map((song) => (
        <div className={search.searchitem} key={song.id}>
            <span>{song.name} <button onClick={() => addHandler(song)}>+</button></span>
            <span>{song.artist} | {song.album}</span>
        </div>
        ));
    }

    // returns a div with all of the songs made by the songHandler funciton
    return (
        <div className={search.searchresults}>
            {songHandler(props.searchResults)}
        </div>
    );
}

export default SearchResults;