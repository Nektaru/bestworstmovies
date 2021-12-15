import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import AuthService from '../../../services/auth.services'
import './Login.css'

const authService = new AuthService()

const Login = ({storeUser}) => {

    const [formData, setFormData] = useState({ username: "", password: "" })

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        let { name, value } = e.currentTarget
    
        setFormData({ ...formData, [name]: value })
      }

    const handleSubmit = (e) => {
    e.preventDefault();

    authService.login(formData)
      .then(response => {
        const user = response.data
        storeUser(user)
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  
    return (
      (

        <Container id='login-background'>
          <Row>
              <Form id='login-container' onSubmit={handleSubmit}>
                  <h1 className='login'>Log in</h1>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control id='label-size' onChange={handleInputChange} value={formData.username} name="username" type="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control id='label-size' onChange={handleInputChange} value={formData.password} name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
          </Row>
        </Container>)
    )

}

export default Login
