import React from 'react';

/**
 * Search component
 * @param {value, setValue, onSearch} props of search state
 */
export default function Search({ value, setValue, onSearch }) {
  return (
    <form className='search-form' onSubmit={onSearch}>
      <input
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder='Search for a movie'
      />
      <button type='submit'>Search</button>
    </form>
  );
}
