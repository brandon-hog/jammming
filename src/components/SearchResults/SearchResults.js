import search from './SearchResults.module.css';

function SearchResults(props) {

    function addHandler(e) {
        // FIXME FIND OUT HOW TO ADD AN ELEMENT TO TRACKLIST
        props.setTrackList((prevItems) => [...prevItems])
    }

    function songHandler(searchResults) {
        return searchResults.map((song) => (
        <div className={search.searchitem} key={song.id}>
            <span>{song.name} <button onClick={addHandler}>+</button></span>
            <span>{song.artist} | {song.album}</span>
        </div>
        ));
    }

    return (
        <div className={search.searchresults}>
            {songHandler(props.searchResults)}
        </div>
    );
}

export default SearchResults;