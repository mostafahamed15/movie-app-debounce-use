import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import Search from './Search';
import Movies from './Movies';
const baseUrl = 'http://www.omdbapi.com/';

/**
 * Root Application Component
 */

export default function APP() {
  // SEARCH STATE AND It's results array
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  /**
   * Event handler for search on click button
   * @param {event} e
   */
  const handleSearch = async (e) => {
    // Prevent page reload
    e.preventDefault();
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
