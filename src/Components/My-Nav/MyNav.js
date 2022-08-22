import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav}  from "react-bootstrap";
import "./style.css";


const MyNav = () => {

return (
    <>
        <Navbar collapseOnSelect expand="lg" className="top-header top">
        <h3 className="brand-title" href="/">
          Paulina Gamboa
        </h3>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav">
        <Nav.Link className="link" href="#about">ABOUT</Nav.Link>
        <Nav.Link className="link" href="#mywork">MY WORK</Nav.Link>
        <Nav.Link className="link" href="#contact">CONTACT</Nav.Link>
        <Nav.Link className="link" href="/">RESUME</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </>
)

}

export default MyNav;