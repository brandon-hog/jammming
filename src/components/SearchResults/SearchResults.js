import search from './SearchResults.module.css';

function SearchResults() {

    const songs = ["john", "loves", "waffles"];

    function songHandler() {
        return songs.map((song, index) => (
        <div className={search.searchitem} key={index}>{song}</div>
        ));
    }

    return (
        <div className={search.searchresults}>
            {songHandler()}
        </div>
    );
}

export default SearchResults;