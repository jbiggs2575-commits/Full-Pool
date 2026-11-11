import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CreateAccount = ({ toolProps }) => {
  const { setUser, navigate } = toolProps;
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    created: ''
  });

  const handleChange = username => e => {
    setValues({ ...values, [username]: e.target.value })
  }

  const clickSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username: values.username || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
      address: values.address || undefined,
      city: values.city || undefined,
      state: values.state || undefined,
      zip: values.zip || undefined,
      created: values.created || undefined
    }

    try {
      const userData = await axios.post('/user', user);

      setUser(userData.data);
      navigate('/');
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    // This is the Container for the User to Create an Account
    <Container>
      <h1 className='my-3'>Welcome Biggs Pools</h1>
      <div className="createAccount d-flex justify-content-center">
        <Card
          className="productCard d-flex justify-content-center mb-3"
          border="dark"
          style={{ width: '50rem', backgroundColor: 'rgb(23, 61, 228)', color: 'lightcyan' }}
        >

          {/* This is the Biggs Pools Logo */}
          <Card.Img variant="top" src="./assets/pool4.jpeg" />

          {/* This Card contains the Signin Heading */}
          <Card.Body>
            <Card.Title className="d-flex justify-content-center">
              <h1>Create Account Here!</h1>
            </Card.Title>
          </Card.Body>

          {/* This is the Form to Create a User Account */}
          <Card.Body>
            <Form>
              {/* This is the User's Name */}
              <Form.Group className="signupFields" controlId="username">
                <Form.Control
                  className="mb-1"
                  value={values.username}
                  onChange={handleChange('username')}
                  type="username"
                  placeholder="name"
                />
              </Form.Group>

              {/* This is the User's Email Address */}
              <Form.Group id="createEmailField" className="signupFields" controlId="email">
                <Form.Control
                  className="mb-1"
                  value={values.email}
                  onChange={handleChange('email')}
                  type="email"
                  placeholder="email"
                />
              </Form.Group>

              {/* This is the User's Password */}
              <Form.Group className="signupFields" controlId="password">
                <Form.Control
                  className="mb-1"
                  value={values.password}
                  onChange={handleChange('password')}
                  type="password"
                  placeholder="password"
                />
              </Form.Group>

              {/* This is the User's Street Adress */}
              <Form.Group className="signupFields" controlId="address">
                <Form.Control
                  className="mb-1"
                  value={values.address}
                  onChange={handleChange('address')}
                  type="address"
                  placeholder="address"
                />
              </Form.Group>

              {/* This is the User's City */}
              <Form.Group className="signupFields" controlId="city">
                <Form.Control
                  className="mb-1"
                  value={values.city}
                  onChange={handleChange('city')}
                  type="city"
                  placeholder="city"
                />
              </Form.Group>

              {/* This is the User's State */}
              <Form.Group className="signupFields" controlId="state">
                <Form.Control
                  className="mb-1"
                  value={values.state}
                  onChange={handleChange('state')}
                  type="state"
                  placeholder="state"
                />
              </Form.Group>

              {/* This is the User's Zip */}
              <Form.Group className="signupFields" controlId="zip">
                <Form.Control
                  className="mb-1"
                  value={values.zip}
                  onChange={handleChange('zip')}
                  type="zip"
                  placeholder="zip"
                />
              </Form.Group>

              {/* This is the Submit Button */}
              <Button className="my-3"
                id="createAccountButton"
                onClick={clickSubmit}
                variant="success"
              >Submit</Button>

              {/* This is the Cancel Button */}
              <Button
                className="mx-3"
                id="createAccountCancelButton"
                variant="danger"
                onClick={() => navigate(-2)}
              >Cancel</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default CreateAccount