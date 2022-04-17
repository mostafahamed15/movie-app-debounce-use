import React from 'react';
import MovieCard from './MovieCard';

/**
 * Movie Container to display all movies
 * @param {isLoading, searchResults} props of array of movies
 */
export default function Movies({ isLoading, searchResults }) {
  return (
    <div className='movies'>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : searchResults !== undefined && searchResults !== [] ? (
        searchResults.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      ) : null}
    </div>
  );
}
