import PropTypes from "prop-types";

export default function Movie({ imgCover, title, summary, genres }) {
  return (
    <article>
      <h2>{title}</h2>
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
  imgCover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
