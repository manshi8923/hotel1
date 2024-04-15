import React from 'react';
import logo from '../img/logo.png';
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
  } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate=useNavigate();
    const logoutHandler=()=>{
      navigate('/');
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          {/* <LiaHotelSolid size={'2rem'}/
          > */}
          <img src={logo} height={'50'} alt='logo' />
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
          </Nav>
          <Nav>
                {/* <Nav.Link href="/mynotes">My Notes</Nav.Link> */}
                <NavDropdown
                  title={"Dashboard"}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/rooms">
                    Rooms 
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='/guests'>
                   Guests 
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='/revenue'>
                  Revenue
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              {/* <Nav.Link href="/login">Login</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header