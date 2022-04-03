import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
         
                <Link className="nav-link" to='/home'>Home</Link>
                <Link className="nav-link" to='/reviews'>Reviews</Link>
                <Link className="nav-link" to='/dashboard'>Dashboard</Link>
                <Link className="nav-link" to='/blogs'>Blogs</Link>
                <Link className="nav-link" to='/about'>About</Link>
         
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
