import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="navbar sticky-top">
      <Navbar.Brand>
        <img src={logo} alt="Logo" width="50%" height="auto" className="d-inline-block align-top" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link>
            <Link to="about-section" smooth={true} duration={500}>
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="degrees-section" smooth={true} duration={500}>
              Degrees
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="minors-section" smooth={true} duration={500}>
              Minors
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="employment-section" smooth={true} duration={500}>
              Employment
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="people-section" smooth={true} duration={500}>
              People
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
