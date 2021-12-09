import React, { useState, setState } from 'react'
import { Form, Button } from 'react-bootstrap'
import AuthService from '../../../services/auth.services'

const authService = new AuthService()

const Signup = () => {

  const [formData, setFormData] = useState({ email: "", password: "" })

  const handleInputChange = (e) => {
    let { name, value } = e.currentTarget

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    authService.signup(formData)
    .then(response => {
        setState(response)
      })

      .catch(err => console.log("te has equivocao pillín"))
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
        <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Signup


// import React, { useEffect, useState } from 'react'
// import { Container, Form, Button, Row, Col } from 'react-bootstrap'
// import AuthService from '../../../services/auth.services'


// const SignupPage = () => {
    
//     const [algo, algofunction] = useState([])
//     state = {
//       username: "",
//       pwd: ""
    
//     }
    
//     const authService = new AuthService()

//     const handleSubmit = (e) => {
//         e.preventDefault();
    
//         authService.signup(state.username, state.pwd)
//           .then(response => {
//             props.storeUser(response.data)
//           })
//           .catch(err => console.log(err.response.data.message))
//       }

//       const handleInputChange = (e) => {
//         const { name, value } = e.currentTarget
    
//         setState({ [name]: value })
//       }

//     useEffect(() => refreshSignup(), [])

//     const refreshSignup = () => {
//         authService.signup()
//             .then(response => {
//                 const
//             })
//     }





//     return (
//       <Container>
//         <Row>
//           <Col md={{ span: 4, offset: 4 }}>
//             <h2>Registro</h2>

//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3" controlId="username">
//                 <Form.Label>Username</Form.Label>
//                 <Form.Control onChange={handleInputChange} value={state.username} name="username" type="text" placeholder="Elige un nombre de usuario" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="password">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control onChange={handleInputChange} value={state.pwd} name="pwd" type="password" placeholder="Password" />
//               </Form.Group>

//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     )

// }

// export default SignupPage
