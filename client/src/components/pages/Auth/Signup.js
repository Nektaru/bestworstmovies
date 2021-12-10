/* import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import SignUp from '../services/authSignUp'

const authSignUp = new SignUp()

const HooksForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "", isPremium: false })

  const handleInputChange = (e) => {
    let { name, value, checked, type } = e.currentTarget

    if (type === "checkbox") value = checked

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    authSignUp.signup()
    // .then()
    // .catch()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" value={formData.password} onChange={handleInputChange} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name="isPremium" value={formData.isPremium} onChange={handleInputChange} type="checkbox" label="Premium user" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default HooksForm
 */