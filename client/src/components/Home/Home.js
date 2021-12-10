import React, {useState} from 'react'
import Row from '../../Row';
// import DetailModal from '../DetailModal/DetailModal';
// import FilmService from "../../../services/film.services";
import requests from '../../requests';
import Banner from '../pages/Banner/Banner';


function Home() {

    // const [show, showModal] = useState(false);

    // const [details, setDetails] = useState({

    //   _id: undefined, 
    //   title: undefined, 
    //   overview: undefined, 
    //   vote_average: undefined, 
    //   poster_path: undefined, 
    //   backdrop_path: undefined
    // })

    // const filmService = new FilmService();

    // function toggle(data) {
    //     setDetails(data);
    //     showModal(true);
    //   }


    return (
        <>
        {/* <DetailModal /> */}
        <Banner />
        <Row title="Worst Movies" fetchUrl={requests.fetchWorstMovies} /> 
        <Row title="Best Movies" fetchUrl={requests.fetchBestMovies} /> 
        <Row title="Awesome Movies" fetchUrl={requests.fetchAwesomeMovies} />
        </>
    )
}

export default Home










