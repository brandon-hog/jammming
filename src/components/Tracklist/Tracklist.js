import tracklist from './Tracklist.module.css';

function Tracklist(props) {

    function trackListHandler(trackList) {
        return trackList.map((song) => <div key={song.id}>
            <span>{song.name}</span>
            <span>{song.artist} | {song.album}</span>
        </div>
        )
    }



    return (
        <div className={tracklist.tracklist}>
            {trackListHandler(props.trackList)}  
            <button className={tracklist.button}>Save to Spotify</button>
        </div>
    );
}

export default Tracklist;