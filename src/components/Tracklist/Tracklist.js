import tracklist from './Tracklist.module.css';

function Tracklist(props) {

    // this function should allow the user to remove songs from the tracklist
    // by filtering through the tracklist and removing the song with matching id
    function removeHandler(song) {

        let list = props.trackList.filter((item) => item.id !== song.id)

        props.setTrackList(list)

    }

    // this should return the elements in the trackList State.
    function trackListHandler(trackList) {
        return trackList.map((song) => <div key={song.id}>
            <span>{song.name} <button onClick={() => removeHandler(song)}>-</button></span>
            <span>{song.artist} | {song.album}</span>
        </div>
        )
    }


    // this should return a div with the songs added to the trackList
    return (
        <div className={tracklist.tracklist}>
            <input value={props.playlist} onChange={(e) => props.setPlayList(e.value)}></input>
            {trackListHandler(props.trackList)}
            <div className={tracklist.buttoncontainer}>
                <button className={tracklist.button}>Save to Spotify</button>    
            </div>  
        </div>
    );
}

export default Tracklist;