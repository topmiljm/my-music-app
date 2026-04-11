import AlbumCard from "../components/AlbumCard";

const Home = ({ albums }) => {
  if (!albums.length) {
    return <div>Loading...</div>;
  }
  return (
    <div className="home">
      <h1>Zen Zinnati Albums</h1>

      <div className="album-grid">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Home;