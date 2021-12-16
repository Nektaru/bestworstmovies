import React, {useState} from 'react'
import Row from '../../Row';
import requests from '../../requests';
import Banner from '../pages/Banner/Banner';


function Home(props) {

    return (
        <>
        <Banner />
        <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} currentUser={props.currentUser} storeUser={props.storeUser}/> 
        <Row title="Terrible Movies" fetchUrl={requests.fetchTerribleMovies} currentUser={props.currentUser} storeUser={props.storeUser}/> 
        <Row title="Really Bad Movies" fetchUrl={requests.fetchReallyBadMovies} currentUser={props.currentUser} storeUser={props.storeUser}/>
        <Row title="Bad Movies" fetchUrl={requests.fetchBadMovies} currentUser={props.currentUser} storeUser={props.storeUser}/>
        <Row title="Still Very Bad Movies" fetchUrl={requests.fetchStillVeryBadMovies} currentUser={props.currentUser} storeUser={props.storeUser}/>
        <Row title="More Bad Movies" fetchUrl={requests.fetchMoreBadMovies} currentUser={props.currentUser} storeUser={props.storeUser}/>
        </>
    )
}

export default Home










