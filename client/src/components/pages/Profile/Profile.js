import React, { useEffect, useState } from "react";
import { Form, Row, Container, Button, Col} from "react-bootstrap";
import AuthServices from "../../../services/auth.services"
import UserServices from "../../../services/user.services"
import './Profile.css';
import { Link } from "react-router-dom";
import icon from '../../../img/avatar.png'


const userServices = new UserServices();

const ProfileUserData = (props) => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        userServices.findUser(props._id)
        .then(user => setUserData(user))
    }, []);

    useEffect(() => {
        userServices.editUser(props._id, userData)
    }, [setUserData, userData]);

    return [userData, setUserData];
};


const Profile = (props) => {

  const [userData, setUserData] = ProfileUserData(props);
  const [user, setUser] = useState([]);
  const [formData, setFormData] = useState([]);

  const handleInputChange = (e) => {
    let { name, value } = e.currentTarget

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserData(formData);
  };
  
  
    return (

      <Container id='profile-background'>
        <Row>
          {/* { this.state.saved && <p>Saved <button onClick={() => this.setState({saved: false})}>Stay</button> <Link to="/">Home</Link></p> } */}
            <Col className="md-6">
            <Form onSubmit={handleSubmit}>
                <h1 className='profile'>Profile</h1>


                    <Form.Group id='profile-container' className="mb-3" controlId="formUsername">
                        <Form.Label >Username</Form.Label>
                    <Form.Control id='label-size' name="username" value={formData.username} onChange={handleInputChange} type="username" placeholder="Enter Username" />
                </Form.Group>
                
                  <Form.Group id='profile-container' className="mb-3" controlId="formUsername">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={handleInputChange} name="firstname" required type="firstname" placeholder="First Name"/>
                  </Form.Group>

                  <Form.Group id='profile-container' className="mb-3" controlId="formUsername">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={handleInputChange} name="lastname" required type="lastname" placeholder="Last Name"/>
                  </Form.Group> 


            
              <Button className="submit-btn" type="submit">Submit</Button>
              
            </Form>
            </Col>
            <Col className="md-6">
            <img 
                    id="avatar"
                    src={icon}
                    alt="user-icon"
                />
             <button type="button" class="btn btn-light">Switch your avatar icon</button>
            </Col>
        </Row>
      </Container>
    );
}

export default Profile;