import React from 'react';
import { useState } from 'react';

const Add = ({setuMovies, setwMovies, uMovies, wMovies, activeTab}) => {
  const [inputText, setInputText] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (activeTab === 'unwatched') { 
        setuMovies([
        ...uMovies,
        {title: inputText}
      ])
      } else {
        setwMovies([
        ...wMovies,
        {title: inputText}
        ])
      }

      setInputText('');
    }}>
      <input type='text' placeholder='Add a title to your list...' value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
      <button type='submit'>Add</button>
    </form>
  )
}

export default Add;