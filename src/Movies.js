import React from 'react';
import MovieCard from './MovieCard';

/**
 * Movie Container to display all movies
 * @param {searchResults} props of array of movies
 */
export default function Movies({ searchResults }) {
  return (
    <div className='movies'>
      {searchResults !== undefined && searchResults !== []
        ? searchResults.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        : null}
    </div>
  );
}
