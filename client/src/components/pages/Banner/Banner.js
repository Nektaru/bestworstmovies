import React, {useState, useEffect} from 'react';
import axios from '../../../axios';
import requests from '../../../requests';
import './Banner.css'
import DetailModal from '../../DetailModal/DetailModal';
import { Modal } from 'react-bootstrap'


function Banner() {
    const [movie, setMovie] = useState([]);

    const [show, showModal] = useState(false);

    const [details, setDetails] = useState({
        _id: undefined, 
        title: undefined, 
        overview: undefined, 
        vote_average: undefined, 
        poster_path: undefined, 
        backdrop_path: undefined
      })


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchWorstMovies);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
            )
           return request;
        }

        fetchData();

    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n -1) + "..." : str;
    }

    function toggle(data) {
        setDetails(data);
        showModal(true);
      }

    return (
        <>
        <Modal show={show} onHide={() => showModal(false)}>
          <Modal.Header closeButton id='modal-title'>
            <Modal.Title id="modal-title">{details.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body id='modal-body'>
            <DetailModal details={details}/>
          </Modal.Body>

        </Modal>

        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        }}>

            <div className="banner_content">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Add to List</button>
                    <button className="banner_button" onClick={() => toggle(movie)}>Info</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner_fadeBottom" />
        </header>
        </>
    )
}

export default Banner


