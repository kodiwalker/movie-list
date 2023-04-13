import React from 'react';
import UList from './Unwatched/UList.jsx';
import WList from './Watched/WList.jsx';
import { useState } from 'react';

const Tabs = ({uMovies, wMovies, setuMovies, setwMovies, filter, setFilter, activeTab, setActiveTab}) => {
  

  const handleUnwatchedTab = () => {
    setActiveTab('unwatched');
    setFilter('');
  }
  const handleWatchedTab = () => {
    setActiveTab('watched');
    setFilter('');
  }

  return (
    <div className='Tabs'>
      <ul>
        <li className={activeTab === 'unwatched' ? 'active' : ''} onClick={handleUnwatchedTab}>To Watch</li>
        <li className={activeTab === 'watched' ? 'active' : ''} onClick={handleWatchedTab}>Watched</li>
      </ul>
      <div className='outlet'>
        {activeTab === 'unwatched' ? <UList uMovies={uMovies} wMovies={wMovies} setuMovies={setuMovies} setwMovies={setwMovies} filter={filter}/> : 
        <WList wMovies={wMovies} uMovies={uMovies} setuMovies={setuMovies} setwMovies={setwMovies} filter={filter}/>}
      </div>
    </div>
  )
}

export default Tabs;