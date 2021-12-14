import React, {  useEffect, useState } from "react";
import { Row, Col, Modal, Container } from 'react-bootstrap'
import FilmCard from '../FilmCard/FilmCard'
import UserService from "../../../services/user.services";
import DetailModal from "../../DetailModal/DetailModal";
import "./MyList.css"


const MyList = (props) => {

    const [films, setFilms] = useState([]);
    const [show, showModal] = useState(false);

    const [details, setDetails] = useState({
      _id: undefined, 
      title: undefined, 
      overview: undefined, 
      vote_average: undefined, 
      poster_path: undefined, 
      backdrop_path: undefined,
      films: undefined,
    })

    const userService = new UserService();

    useEffect(() => refreshFilms(), []);

    const refreshFilms = () => {

      //TODO pasar ID de usuario a getAllViewed
    userService.getAllViewed(props.currentUser._id)
      .then(response => {
        const films = response.data
        // console.log('>>>>>>>>>>>', films)
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
        <Modal show={show} onHide={() => showModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{details?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DetailModal details={details} />
          </Modal.Body>
        </Modal>

        <Container fluid>
          <Row>
            {films.length > 0 &&
              films.map(elm => {
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

export default MyList