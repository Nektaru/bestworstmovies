import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';
import Nav from './Navbar';

function App() {
  return (
    <div className="App">
    <Nav />
      <Banner />
      <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
      <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
      <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
    </div>
  );
}

export default App;
