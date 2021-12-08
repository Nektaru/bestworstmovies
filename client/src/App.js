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
      <Row title="Best Movies" fetchUrl={requests.fetchBestMovies} /> 
      <Row title="Awesome Movies" fetchUrl={requests.fetchAwesomeMovies} /> 
    </div>
  );
}

export default App;
