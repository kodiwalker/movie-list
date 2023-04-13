import React from 'react';
import UListItem from './UListItem.jsx';

const UList = ({uMovies, wMovies, setuMovies, setwMovies, filter}) => {
  let filtereduMovies;
  filter === '' ? filtereduMovies = uMovies : filtereduMovies = uMovies.filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase()));
  if (filtereduMovies.length === 0 && filter.length > 0) {
    return (<ul>Sorry, there are no matching movies.</ul>)
  } else if (filtereduMovies.length === 0 && filter === '') {
    return (<ul>Add some movies!</ul>)
  } else {
  return (
    <ul className='unwatchedTab'>
      {filtereduMovies.map((movie) => (
      <UListItem movie={movie} wMovies={wMovies} uMovies={uMovies} setuMovies={setuMovies} setwMovies={setwMovies}/>
      ))}
    </ul>
  )
  }
}


export default UList;