import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hey</h1>
      <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
    </div>
  );
}

export default App;
