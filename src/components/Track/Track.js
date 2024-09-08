import track from './Track.module.css';

function Track(props) {

    function trackHandler(track) {
        return (
            <div>
                <span>{track.name}</span>
                <span>{track.artist}</span>
                <span>{track.album}</span>
            </div>
        )
    }


    return (
        <div className={track}>
            <div>
                {trackHandler(props.track)}
            </div>
        </div>
    );
}

export default Track;