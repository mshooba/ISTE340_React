import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo.png';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="navbar">
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" width="50%" height="auto" className="d-inline-block align-top" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#" className="text-white px-3">
            About
          </Nav.Link>
          <span className="text-white"></span>
          <Nav.Link href="#" className="text-white px-3">
            Degrees
          </Nav.Link>
          <span className="text-white"></span>
          <Nav.Link href="#" className="text-white px-3">
            Minors
          </Nav.Link>
          <span className="text-white"></span>
          <Nav.Link href="#" className="text-white px-3">
            Employment
          </Nav.Link>
          <span className="text-white"></span>
          <Nav.Link href="#" className="text-white px-3">
            People
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
