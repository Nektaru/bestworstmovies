import React from 'react';
import './App.css';
import Row from './Row';
import Banner from '../src/components/pages/Banner/Banner';
import requests from './requests';
import Navbar from '../src/components/layout/Navbar';
import { Switch, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Navbar />
      <Banner />
      <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
      <Row title="Best Movies" fetchUrl={requests.fetchBestMovies} /> 
      <Row title="Awesome Movies" fetchUrl={requests.fetchAwesomeMovies} /> 
    </div>
  );
}

export default App;
