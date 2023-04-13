import React from 'react';
import WListItem from './WListItem.jsx';

const WList = ({uMovies, wMovies, setuMovies, setwMovies, filter}) => {
  let filteredwMovies;
  filter === '' ? filteredwMovies = wMovies : filteredwMovies = wMovies.filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase()));
  if (filteredwMovies.length === 0 && filter.length > 0) {
    return (<ul>Sorry, there are no matching movies.</ul>)
  } else if (filteredwMovies.length === 0 && filter === '') {
    return (<ul>Add some movies!</ul>)
  } else {
  return (
    <ul className='watchedTab'>
      {filteredwMovies.map((movie) => (
      <WListItem movie={movie} wMovies={wMovies} uMovies={uMovies} setuMovies={setuMovies} setwMovies={setwMovies}/>
      ))}
    </ul>
  )
  }
}


export default WList;