import { useRef } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import axios from 'axios';

const EditAccount = ({ toolProps }) => {
  const { user, setUser, navigate } = toolProps;
  const usernameRef = useRef();
  const emailAddressRef = useRef();
  const passwordRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();

  const handleEditProfile = async (e) => {
    e.preventDefault();

    const id = user._id
    const updatedUser = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      email: emailAddressRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      zip: zipRef.current.value,
    }

    try {
      let result = await axios.put(`/user/${id}`, updatedUser);
      setUser(result.data);
      navigate(-1);

      return result;
    }
    catch (err) {
      console.error(err)
    }
  };

  return (
    <>
      <Container className="createAccount d-flex justify-content-center">
        {/* This Card contains the Logo and Greeting */}
        <Card
          className="productCard d-flex justify-content-center my-5"
          border="dark"
          style={{ width: '50rem' }}
        >
          {/* This is the Link to the Biggs Pools Logo */}
          <Card.Img className="p-3" variant="top" src="./assets/pool4.jpeg" />

          {/* This is the Greeting and Profile */}
          <Card.Body>
            <Card.Title className="d-flex justify-content-center">
              <h1>Welcome to Biggs Pools {user.username}</h1>
            </Card.Title>

            <Card.Title className="d-flex justify-content-center">
              <h3>Edit your profile below:</h3>
            </Card.Title>
          </Card.Body>

          {/* This is the Card contains the Form to Edit the User's Profile */}
          <Card.Body>
            <Form id="editProfile" onSubmit={handleEditProfile}>
              {/* This is the Email Placement */}
              <Form.Group id="editUsername" controlId="username">
                <Form.Control
                  className="mb-1"
                  type="text"
                  placeholder="username"
                  defaultValue={user.username}
                  ref={usernameRef}
                />
              </Form.Group>

              {/* This is the Email Placement */}
              <Form.Group id="editUserEmail" controlId="email">
                <Form.Control
                  className="mb-1"
                  type="email"
                  placeholder="email"
                  defaultValue={user.email}
                  ref={emailAddressRef}
                />
              </Form.Group>

              {/* This is the Password Placement */}
              <Form.Group id="editUserPassword" controlId="password">
                <Form.Control
                  className="mb-1"
                  type="password"
                  placeholder="password"
                  defaultValue={user.password}
                  ref={passwordRef}
                />
              </Form.Group>

              {/* This is the Street Address Placement */}
              <Form.Group id="editUserStreetAddress" controlId="address">
                <Form.Control
                  className="mb-1"
                  type="address"
                  placeholder="address"
                  defaultValue={user.address}
                  ref={addressRef}
                />
              </Form.Group>

              {/* This is the City Placement */}
              <Form.Group id="editUserCity" controlId="city">
                <Form.Control
                  className="mb-1"
                  type="city"
                  placeholder="city"
                  defaultValue={user.city}
                  ref={cityRef}
                />
              </Form.Group>

              {/* This is the State Placement */}
              <Form.Group id="editUserState" controlId="state">
                <Form.Control
                  className="mb-1"
                  type="state"
                  placeholder="state"
                  defaultValue={user.state}
                  ref={stateRef}
                />
              </Form.Group>

              {/* This is the Zip Placement */}
              <Form.Group id="editUserState" controlId="zip">
                <Form.Control
                  className="mb-1"
                  type="zip"
                  placeholder="zip"
                  defaultValue={user.zip}
                  ref={zipRef}
                />
              </Form.Group>

              {/* This is the Submit && Cancel Button */}
              <Button className="mt-3" id="editChangeBtn" type="submit" variant="success">Submit</Button>
              <Button className="mt-3 mx-3" id="editCancelBtn" variant="danger" onClick={() => navigate(-1)}>Cancel</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default EditAccount;