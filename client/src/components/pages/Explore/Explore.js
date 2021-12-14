import React, {  useEffect, useState } from "react";
import { Row, Col, Modal, Container } from 'react-bootstrap'
import FilmCard from '../FilmCard/FilmCard'
import FilmService from "../../../services/film.services";
import DetailModal from "../../DetailModal/DetailModal";
import './Explore.css'

const base_url = "https://image.tmdb.org/t/p/original/"

const Explore = () => {

    const [films, setFilms] = useState([]);
    const [show, showModal] = useState(false);

    const [details, setDetails] = useState({
      _id: undefined, 
      title: undefined, 
      overview: undefined, 
      vote_average: undefined, 
      poster_path: undefined, 
      backdrop_path: undefined
    })

    const filmService = new FilmService();

    useEffect(() => refreshFilms(), []);

    const refreshFilms = () => {

    filmService.getAllFilms()
      .then(response => {
        const films = response.data
        setFilms(films)
})
      .catch(err => console.log(err))
  };

  function toggle(data) {
    setDetails(data);
    showModal(true);
  }


    return (
      <div>

        {/* <Button onClick={toggle}>CLICK ME</Button> */}

        <Modal show={show} onHide={() => showModal(false)}>
          <Modal.Header closeButton id="modal-header">
            <Modal.Title id="modal-title">{details.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modal-body">
            <DetailModal details={details}></DetailModal>
          </Modal.Body>

        </Modal>


        <Container fluid>
          <Row>
            {films.map(elm => {
              return (
                
                <Col md={3}>
                  <FilmCard key={elm._id} {...elm} toggle={toggle} />
                </Col>
              )
            })
            }
          </Row>
        </Container>
      </div>
    
        )
    
}

export default Explore