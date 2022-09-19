import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; //path detail

function MovieItem({ id, title, backdropPath, overview }) {
  return (
    <article>
      <img src={backdropPath} alt={title} />

      {/* <h3>{title}</h3> */}
      {/* Link to akan mengarahkan url berdasarkan nilai dari prop ID di MovieItem */}
      <h3>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h3>
      {/*next menambahkan route pada App.js */}

      <p>{overview}</p>
    </article>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backdropPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieItem;
