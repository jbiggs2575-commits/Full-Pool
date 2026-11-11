import { Container, Button, Card } from 'react-bootstrap';
import axios from 'axios';

const DeleteAccount = ({ toolProps }) => {
  const { user, navigate } = toolProps;

  const deleteAccount = async () => {
    try {
      await axios.delete(`/user/${user._id}`);
      setTimeout(() => location.assign('/'), 500)
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <Container className="d-flex justify-content-center">
      {/* This is the Card to Delete an Account */}
      <Card
        className="productCard d-flex justify-content-center my-5"
        border="dark"
        style={{ width: '50rem' }}
      >

        {/* This is the Biggs Pools Logo and Heading */}
        <Card.Img className="p-3" variant="top" src="./assets/pool4.jpeg" />

        <Card.Title className="d-flex justify-content-center">
          <h1>Welcome to Biggs Pools {user.username}</h1>
        </Card.Title>

        <Card.Text className="d-flex justify-content-center" id="deleteHeader">Are you sure you want to DELETE your account?</Card.Text>

        {/* This is the Delete && Cancel Button */}
        <Card.Body className="d-flex justify-content-center">
          <Button onClick={deleteAccount} id="deleteConfirmBtn" variant="danger">Delete</Button>
          <Button className="mx-3" onClick={() => navigate(-1)} id="deleteCancelBtn" variant="success">Cancel</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default DeleteAccount