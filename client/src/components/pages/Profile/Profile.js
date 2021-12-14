import React, { useEffect, useState } from "react";
import { Form, Row, Col, Container, Button, Table } from "react-bootstrap";
import AuthServices from "../../../services/auth.services"
import UserServices from "../../../services/user.services"
import './Profile.css';
import { Link } from "react-router-dom"

const userServices = new UserServices();

const ProfileUserData = (props) => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        userServices.findUser(props._id)
        .then(user => setUserData(user))
    }, []);

    useEffect(() => {
        userServices.editUser(props._id, userData)
    }, [setUserData, userData])

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
  }
  
  
    return (

      <Container>
        <h1>holi</h1>
        <Row>
          {/* { this.state.saved && <p>Saved <button onClick={() => this.setState({saved: false})}>Stay</button> <Link to="/">Home</Link></p> } */}
            <Form id='profile-container' onSubmit={handleSubmit}>
                <h1 className='profile' >Profile</h1>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label >Username</Form.Label>
                    <Form.Control id='label-size' name="username" value={formData.username} onChange={handleInputChange} type="username" placeholder="Enter Username" />
                </Form.Group>
                
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleInputChange} name="password" required type="password" placeholder="Password"/>
                  </Form.Group>
            
              <Button type="submit">Submit</Button>
              
            </Form>
        </Row>
      </Container>
    );
}

export default Profile;