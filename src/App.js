import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import Search from './Search';
import Movies from './Movies';
import usePrevState from './hooks/UsePrevState';
const baseUrl = 'http://www.omdbapi.com/';

/**
 * Root Application Component
 */

export default function APP() {
  // SEARCH STATE AND It's results array
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const prevSearchText = usePrevState(searchText);

  /**
   * Event handler for search on click button
   * @param {event} e
   */
  const handleSearch = async (e) => {
    // Prevent page reload
    e.preventDefault();
    if (searchText !== '' && searchText !== prevSearchText) {
      setIsDisabled(true);
      setIsLoading(true);
      await Axios.get(baseUrl, {
        params: {
          apikey: '24ceeb9c',
          s: searchText,
        },
      })
        .then((response) => {
          setResults(response.data.Search);
          setIsDisabled(false);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsDisabled(false);
          setIsLoading(false);
        });
    }
  };

  return (
    <div className='App'>
      <header>React Movies</header>
      <main>
        <Search
          value={searchText}
          isDisabled={isDisabled}
          setValue={setSearchText}
          onSearch={handleSearch}
        />
        <Movies searchResults={results} isLoading={isLoading} />
      </main>
    </div>
  );
}
