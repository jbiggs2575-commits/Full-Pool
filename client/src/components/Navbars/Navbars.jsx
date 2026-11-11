import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Image, Container, Row } from 'react-bootstrap'
import './Navbars.css'

const Navbars = ({ toolProps }) => {
  const { user, setUser, navigate } = toolProps
  const date = new Date()
  const signout = async () => {
    try {
      setUser({})
      navigate('/')
    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <Container fluid>
      <Row>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand className="ms-3">
            <div className="date">{date.toDateString()}</div>
            <Image className='logo' src="/assets/poolSign.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="navlink" to="/">Home</NavLink>
              <NavLink className="navlink" to="/products">Products</NavLink>
            </Nav>
            <Nav className="ms-auto">
              {
                user && user.username ? (
                  <>
                    <NavLink className="navlink" to="/" id="signoutBtn" variant='outline-warning' onClick={signout}>Signout</NavLink>
                    <NavLink className="navlink" to="/profile" id="profileBtn" variant='outline-warning'>Profile</NavLink>
                  </>
                ) : (
                    <>
                      <NavLink className="navlink" to="/signin" id="signinBtn" variant='outline-warning'>Signin</NavLink>
                    </>
                  )
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  )
}

export default Navbars