import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';

function App() {
  return (
    <div className="App">
      
      <Banner />
      <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
    </div>
  );
}

export default App;
