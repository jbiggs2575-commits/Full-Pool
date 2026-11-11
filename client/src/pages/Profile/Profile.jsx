import { useEffect } from 'react';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';

const Profile = ({ toolProps }) => {
  const { user, navigate } = toolProps;
  const handleReadProfile = async () => { };

  useEffect(() => {
    handleReadProfile();
  }, []);

  return (
    <>
      <Container className="createAccount d-flex justify-content-center">
        <Card
          className="productCard my-5"
          border="dark"
          style={{ width: '50rem' }}
        >

          {/* This is the Biggs Pools Logo and Heading */}
          <Card.Img className="p-3" variant="top" src="./assets/pool9.jpeg" />

          <Card.Body>
            <Card.Title>
              <h1>Welcome to Biggs Pools {user.username}</h1>
            </Card.Title>

            <Card.Title>
              <h3>Here is your profile information:</h3>
            </Card.Title>
          </Card.Body>

          {/* This is the User's Profile */}
          <Card.Body>
            <ListGroup id="profileInfoContainer">
              <ListGroup.Item>Username: {user.username}</ListGroup.Item>
              <ListGroup.Item>Password: {user.password}</ListGroup.Item>
              <ListGroup.Item>Email: {user.email}</ListGroup.Item>
              <ListGroup.Item>Address: {user.address}</ListGroup.Item>
              <ListGroup.Item>City: {user.city}</ListGroup.Item>
              <ListGroup.Item>State: {user.state}</ListGroup.Item>
              <ListGroup.Item>Zip: {user.zip}</ListGroup.Item>
              <ListGroup.Item>Joined: {(new Date(user.created)).toDateString()}</ListGroup.Item>
            </ListGroup>

            {/* This is the Edit Button */}
            <Button
              className="mt-3"
              id="editProfileButton"
              variant="success"
              onClick={() => navigate('/editAccount')}
            >Edit</Button>

            {/* This is the Delete Button */}
            <Button
              className="mt-3 mx-3"
              id="deleteProfileButton"
              variant="danger"
              onClick={() => navigate('/deleteAccount')}
            >Delete</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Profile;