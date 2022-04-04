import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    const routeObjec = [
        {path:'/home', display:"home" },
        {path:'/reviews', display:"Reviews" },
        {path:'/dashboard', display:"Dashboard" },
        {path:'/blogs', display:"Blogs" },
        {path:'/about', display:"About" },
      
    ]
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand> <Link to='/home' style={{textDecoration:"none"}}> Drone App </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-dark" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
         
            {/* {
                routeObjec.map(rr=> <Link></Link>)
            } */}
                <Link className="nav-link" to='/home'>{"Home".toUpperCase()}</Link>
                <Link className="nav-link" to='/reviews'>{"Reviews".toUpperCase()}</Link>
                 <Link className="nav-link" to='/dashboard'>{"Dashboard".toUpperCase()}</Link>
                <Link className="nav-link" to='/blogs'>{"Blogs".toUpperCase()}</Link>
                <Link className="nav-link" to='/about'>{"About".toUpperCase()}</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
