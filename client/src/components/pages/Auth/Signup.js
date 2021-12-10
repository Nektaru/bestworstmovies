import React, { useState, setState } from 'react'
import { Form, Button, Row, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import AuthService from '../../../services/auth.services'

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
    <Container>
    <Row>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="username" value={formData.username} onChange={handleInputChange} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" value={formData.password} onChange={handleInputChange} type="password" placeholder="Password" />
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