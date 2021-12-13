import React, { useState, useEffect } from 'react';
import axios from './axios';
import { Modal } from 'react-bootstrap'
import './Row.css';
import DetailModal from './components/DetailModal/DetailModal';
import FilmService from "./services/film.services";


const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

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

            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
         
        fetchData();
 
    }, [fetchUrl]);

    const filmService = new FilmService();

    function toggle(data) {
        setDetails(data);
        showModal(true);
      }


    return (

        <>
        <Modal show={show} onHide={() => showModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{details.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DetailModal />
          </Modal.Body>

        </Modal>

        <div className="row">
        filmService
            <h2>{title}</h2>

            <div className="row_posters">

                {movies.map(movie => (
                    <>
                    <img key={movie.id} className="row_poster" src= {`${base_url}${movie.poster_path}`} alt={movie.name}
                    onClick={() => toggle()}
                     />
                    </>
                ))}
            </div>
        </div>
        </>
    )
}

export default Row; 