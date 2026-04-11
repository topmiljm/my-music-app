const TrackList = ({ tracks, setCurrentTrack }) => {
  return (
    <div className="track-list">
      {tracks.map((track) => (
        <div
          key={track.id}
          className="track"
          onClick={() => setCurrentTrack(track)}
        >
          <img src={track.cover} alt={track.title} />
          <div>
            <h4>{track.title}</h4>
            <p>{track.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;