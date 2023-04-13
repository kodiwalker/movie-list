import React from 'react';
import { useState } from 'react';

const Search = ({setFilter, activeTab}) => {
  const [searchText, setSearchText] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setFilter(searchText);
      setSearchText('');
    }}>
      <input type='text' placeholder='Search your list...' value={searchText} onChange={(event) => setSearchText(event.target.value)}></input>
      <button type='submit'>Search</button>
    </form>
  )
}

export default Search;