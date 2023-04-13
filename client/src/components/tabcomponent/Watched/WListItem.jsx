import React from 'react';

const WListItem = ({movie, wMovies, uMovies, setuMovies, setwMovies}) => {

  const handleToWatchClick = () => {
    //^ add movie to unwatched state
    setuMovies([...uMovies, movie])
    //^ remove movie from watched state
    setwMovies(wMovies.filter(wmovie => wmovie.title !== movie.title))
  }

  return (
    <li>{movie.title}<button onClick={handleToWatchClick}>to watch</button></li>
  )
}

export default WListItem;