import React from 'react';

/**
 * Search component
 * @param {isDisabled, value, setValue, onSearch} props of search state
 */
export default function Search({ isDisabled, value, setValue, onSearch }) {
  return (
    <form className='search-form' onSubmit={onSearch}>
      <input
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder='Search for a movie'
      />
      <button type='submit' disabled={isDisabled}>
        Search
      </button>
    </form>
  );
}
