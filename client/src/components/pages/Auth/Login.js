import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import AuthService from '../../../services/auth.services'

const authService = new AuthService()

const Login = () => {

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
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  
    return (
      (
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <h2>Login</h2>
              <hr />
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control onChange={handleInputChange} value={formData.username} name="username" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={handleInputChange} value={formData.password} name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>)
    )

}

export default Login
