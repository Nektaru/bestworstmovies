import React, {  useEffect, useState } from "react";
import { Row, Col, Modal, Button } from 'react-bootstrap'
import FilmCard from '../FilmCard/FilmCard'
import FilmService from "../../../services/film.services";


// function Explore() {
//     return (
//         <div>
//             {""}
//         </div>
//     )
// }

// export default Explore

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

        <Row>
          {this.props.film.map(elm => {

            return (
              <Col key={elm._id}>
                <FilmCard  {...elm} />
              </Col>
            )
          })
          }
        </Row>
      </div>
    
        )
    
}

export default Explore

{/* <CoasterList refreshCoasters={this.refreshCoasters} coasters={this.state.coasters} /> */}