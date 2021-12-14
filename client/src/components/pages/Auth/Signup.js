import React, { useState, setState } from 'react'
import { Form, Button, Row, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.services'
import './Signup.css'
import logo from '../../../img/badflix-logo.png'

const authService = new AuthService()

const Signup = () => {

  const [formData, setFormData] = useState({ username: "", password: "" })

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.currentTarget

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    authService.signup(formData)
      .then(response => {
        navigate("/login")
      })
      .catch(err => console.log(err))
  }

  return (
    
    <Container id='signup-background'>
      <Row>
        <Form id='signup-container' onSubmit={handleSubmit}>
            <h1 className='sign-up' >Sign up</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label >Email address</Form.Label>
              <Form.Control id='label-size' name="username" value={formData.username} onChange={handleInputChange} type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label >Password</Form.Label>
          <Form.Control id='label-size' name="password" value={formData.password} onChange={handleInputChange} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Row>
    </Container>
  )
}

export default Signup