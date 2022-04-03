import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white" >
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto" >
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Reviews</Nav.Link>

      <Nav.Link href="#deets">Blogs</Nav.Link>
      <Nav.Link  href="#memes">
        About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;