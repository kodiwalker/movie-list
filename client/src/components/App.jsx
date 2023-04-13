import React from 'react';
import Tabs from './tabcomponent/Tabs.jsx'
import Search from './Search.jsx'
import Add from './Add.jsx'
import { useState } from 'react';

const App = () => {
  const [filter, setFilter] = useState('');
  
  const [uMovies, setuMovies] = useState([]);
  const [wMovies, setwMovies] = useState([]);

  const [activeTab, setActiveTab] = useState('unwatched');

  return (
    <>
    <h1>MovieList</h1>
    <Add setuMovies={setuMovies} setwMovies={setwMovies} uMovies={uMovies} wMovies={wMovies} activeTab={activeTab}/>
    <Search setFilter={setFilter} activeTab={activeTab}/>
    <Tabs uMovies={uMovies} wMovies={wMovies} setuMovies={setuMovies} setwMovies={setwMovies} filter={filter} setFilter={setFilter} activeTab={activeTab} setActiveTab={setActiveTab}/>
    </>
  )
};

export default App;