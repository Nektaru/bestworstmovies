import React from 'react'
import Row from '../../Row';
import DetailModal from '../DetailModal/DetailModal';
import requests from '../../requests';
import Banner from '../pages/Banner/Banner';


function Home() {
    return (
        <>
        <DetailModal />
        <Banner />
        <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
        <Row title="Best Movies" fetchUrl={requests.fetchBestMovies} /> 
        <Row title="Awesome Movies" fetchUrl={requests.fetchAwesomeMovies} />
        </>
    )
}

export default Home










