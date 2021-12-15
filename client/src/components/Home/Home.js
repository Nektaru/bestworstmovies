import React, {useState} from 'react'
import Row from '../../Row';
import requests from '../../requests';
import Banner from '../pages/Banner/Banner';


function Home() {

    return (
        <>
        <Banner />
        <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
        <Row title="Best Movies" fetchUrl={requests.fetchBestMovies} /> 
        <Row title="Awesome Movies" fetchUrl={requests.fetchAwesomeMovies} />
        <Row title="Actually Good Movies" fetchUrl={requests.fetchActuallyGoodMovies} />
        </>
    )
}

export default Home










