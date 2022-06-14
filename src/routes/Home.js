import { useState, useEffect } from "react";
import Movie from "./components/Movie";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  /* 비동기방식 fetch */
  const getMovies = async () => {
    /*
    const response = await(fetch(
      `https://yts.mx/api/v2/list_movies.json?mininum_rating=8.5&sort_by=year`
    )).json();
    const json = await response.json();
    */

    /* fetch 결과를 response로 받고 json으로 변환하는 코드의 축약형 */
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?mininum_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
    /* 동기방식 fetch
    fetch(
      `https://yts.mx/api/v2/list_movies.json?mininum_rating=8.5&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json);
        setLoading(false);
      });
    */
  }, []);

  return (
    <div>
      <h1>The Movies! ({movies.length})</h1>
      {loading ? (
        "Loading..."
      ) : (
        <section>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              imgCover={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </section>
      )}
    </div>
  );
}
