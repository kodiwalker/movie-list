import React from 'react';

const UListItem = ({movie, wMovies, uMovies, setuMovies, setwMovies}) => {

  const handleWatchedClick = () => {
    //^ add movie to watched state
    setwMovies([...wMovies, movie])
    //^ remove movie from unwatched state
    setuMovies(uMovies.filter(umovie => umovie.title !== movie.title))
  }

  return (
    <li>{movie.title}<button onClick={handleWatchedClick}>watched</button></li>
  )
}

export default UListItem;