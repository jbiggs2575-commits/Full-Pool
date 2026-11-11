import React from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar className="fixed-bottom mt-5 text-white" bg="dark">
          <Col className="my-auto">
            <i className="icons fab fa-fw mx-5" aria-hidden="true" title="Copy to use twitter"></i>
            <i className="icons fa fa-fw mx-5" aria-hidden="true" title="Copy to use swimming-pool"></i>
          </Col>

          <Col className="my-auto">
            <p className='copyright'>{new Date().getFullYear()} &copy;Biggs Pools and Spas. All rights reserved.</p>
          </Col>

          <Col className="my-auto">
            <i className="icons fa fa-fw mx-5" aria-hidden="true" title="Copy to use trademark"></i>
            <i className="icons fab fa-fw mx-5" aria-hidden="true" title="Copy to use youtube"></i>
          </Col>
        </Navbar>
      </Row>
    </Container>
  )
}

export default Footer