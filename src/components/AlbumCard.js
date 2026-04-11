import { Link } from "react-router-dom";

const AlbumCard = ({ album }) => {
  return (
    <Link to={`/album/${album.id}`} className="album-card">
      <img src={album.cover} alt={album.title} />
      <h3>{album.title}</h3>
      {/* <p>{album.artist}</p> */}
    </Link>
  );
};

export default AlbumCard;