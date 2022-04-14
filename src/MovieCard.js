import React from 'react';

/**
 * Movie card component to display movie details.
 * @param {movie} props with movie object data
 */

export default function MovieCard({ movie }) {
  return (
    <div className='movie-card'>
      <h4>{movie.Title}</h4>
      <img src={movie.Poster || '#'} alt={movie.Title} />
    </div>
  );
}
