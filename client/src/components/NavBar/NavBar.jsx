import React, {useState} from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { useSelector } from "react-redux";

export function NavBar() {
 
  const user = useSelector((state) => state.user)
  
  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

          <Nav className="me-auto">
            {user
              ? <Nav.Link href="/signin">Log out</Nav.Link>
              : <>
                <Nav.Link href="/signin">Sign In</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


