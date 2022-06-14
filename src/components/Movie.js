import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movie({ id, imgCover, title, summary, genres }) {
  return (
    <article>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <div>
        <img src={imgCover} alt={title} />
      </div>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, idx) => (
          <li key={idx}>{genre}</li>
        ))}
      </ul>
    </article>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  imgCover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
