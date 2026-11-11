import React, { useRef } from 'react';
import axios from 'axios'
import { Form, Button, Card, Container } from 'react-bootstrap'

const Signin = ({ toolProps }) => {
  const { setUser, navigate } = toolProps
  const passwordRef = useRef()
  const emailRef = useRef()

  const handleSigninUser = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('/user/signin', {
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
      setUser(result.data.user)
      navigate('/')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <h1 className='my-3'>Welcome Biggs Pools</h1>
      <div className='d-flex justify-content-center mb-3'>
        <div>
          <Card id='signinForm' border="dark"
            style={{ width: '50rem', backgroundColor: 'rgb(23, 61, 228)', color: 'lightblue' }}
          >
            <Card.Img variant="top" src='./assets/pool4.jpeg' />

            <h1>Sign In!</h1>
            <Card.Body>
              <Form>
                <Form.Control
                  ref={emailRef}
                  className="mb-3"
                  type="email"
                  name="email"
                  placeholder='email'
                  required
                />
                <Form.Control
                  ref={passwordRef}
                  className="mb-3"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div>
                  <div className='d-flex my-3'>
                    <Button variant="success" onClick={handleSigninUser}>Submit</Button>
                    <Button className='mx-3' variant="danger" onClick={() => navigate(-1)}>Cancel</Button>
                  </div>
                  <Card.Link style={{ color: 'white' }} href="/createAccount">Create account here</Card.Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  )
}

export default Signin
