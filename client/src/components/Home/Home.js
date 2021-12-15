import React, {useState} from 'react'
import Row from '../../Row';
import requests from '../../requests';
import Banner from '../pages/Banner/Banner';


function Home() {

    return (
        <>
        <Banner />
        <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
        <Row title="Terrible Movies" fetchUrl={requests.fetchTerribleMovies} /> 
        <Row title="Really Bad Movies" fetchUrl={requests.fetchReallyBadMovies} />
        <Row title="Bad Movies" fetchUrl={requests.fetchBadMovies} />
        <Row title="Still Very Bad Movies" fetchUrl={requests.fetchStillVeryBadMovies} />
        <Row title="More Bad Movies" fetchUrl={requests.fetchMoreBadMovies} />
        </>
    )
}

export default Home










