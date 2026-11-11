import React from 'react';
import { Container, Image, Button, Row, Col } from 'react-bootstrap'
import './Home.css'

const Home = ({ toolProps }) => {
  const { user } = toolProps;

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="display-4 text-white">
              <b>Welcome to Biggs Pools & Spas {user.username}</b>
            </h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <Image className='homeImage rounded' src="./assets/pool4.jpeg" />
          </Col>
        </Row>

        <div className='btmContainer'>
          <Row>
            <Col className="baseContainer">
              <Button className='baseBtn' href="./signin">
                <Image className='baseImg' src="/assets/smallPoolad.png" />
              </Button>
            </Col>
          </Row>

          <Row>
            <Col className="baseContainer">
              <Button className='baseBtn' href="./signin">
                <Image className='baseImg' src="/assets/smallPoolad2.png" />
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Home