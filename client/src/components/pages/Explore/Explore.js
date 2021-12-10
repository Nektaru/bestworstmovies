import React, {  useEffect, useState } from "react";
import { Row, Col, Modal, Button, Container } from 'react-bootstrap'
import FilmCard from '../FilmCard/FilmCard'
import FilmService from "../../../services/film.services";


const Explore = () => {

    const [films, setFilms] = useState([])

    const filmService = new FilmService()

    useEffect(() => refreshFilms(), [])


    const refreshFilms = () => {

    filmService.getAllFilms()
      .then(response => {
        const films = response.data
        setFilms(films)
      })
      .catch(err => console.log(err))
  }

    return (
        <div>

        {/* <Button onClick={this.openModal}>Crea una nueva montaña rusa</Button>

        <Modal
          show={this.state.showModal}
          backdrop="static"
          onHide={this.closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Nueva Coaster</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewCoasterForm refreshCoasters={this.props.refreshCoasters} closeModal={this.closeModal} />
          </Modal.Body>

        </Modal> */}

        <Container fluid>
          <Row>
            {films.map(elm => {
              return (
                
                <Col md={3}>
                  <FilmCard key={elm._id}  {...elm} />
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