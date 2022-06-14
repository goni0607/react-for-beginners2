import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <>
          <h1>{movie.title_long}</h1>
          <Link to="/">Go to List</Link>
          <hr />
          <div>
            <img src={movie.large_cover_image} alt={`${movie.title}`} />
          </div>
          <p>{movie.description_full}</p>
          <ul>
            <li>Download Count: {movie.download_count}</li>
            <li>
              Genre:{" "}
              {movie.genres.map((genre, idx) => (
                <span key={idx}>{genre}</span>
              ))}
            </li>
            <li>Rating: {movie.rating}</li>
            <li>runtime: {movie.runtime}</li>
          </ul>
          <hr />
          <Link to="/">Go to List</Link>
        </>
      )}
    </>
  );
}
