import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
const baseUrl = 'http://www.omdbapi.com/';

/**
 * Root Application Component
 */
export default function App() {
  // store/update search text & api request results in state
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  /**
   * Event handler for clicking the search button
   * @param {event} e
   */
  const handleSearch = async (e) => {
    e.preventDefault(); // prevent page reload
    await Axios.get(baseUrl, {
      params: {
        apikey: '24ceeb9c',
        s: searchText,
      },
    }).then((response) => setResults(response.data.Search));
  };
  return (
    <div className='App'>
      <header>React Movies</header>
      <main>
        <Search
          value={searchText}
          setValue={setSearchText}
          onSearch={handleSearch}
        />
        <Movies searchResults={results} />
      </main>
    </div>
  );
}

/**
 * Movie card component
 * @param {{movie}} props with movie object containing movie data
 */
function MovieCard({ movie }) {
  return (
    <div className='movie-card'>
      <h4>{movie.Title}</h4>
      <img src={movie.Poster || '#'} alt={movie.Title} />
    </div>
  );
}

/**
 * Containe rto hold all movies
 * @param {searchResults} param0
 */
function Movies({ searchResults }) {
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

/**
 * search bar
 * @param {{string, function, function}} props
 */
function Search({ value, setValue, onSearch }) {
  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Movie name...'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
