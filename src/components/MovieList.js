import React from "react";
import MovieItem from "./MovieItem";

function MoiveList({ movies }) {
  if (!movies.length) {
    return <p>No Movie Found</p>;
  }

  return (
    <div>
      {/* {console.log(movies[0])} */}
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MoiveList;
