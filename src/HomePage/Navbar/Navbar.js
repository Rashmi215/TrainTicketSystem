import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Train Ticket Page</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#trains">Trains</Nav.Link>
                    <Nav.Link href="#holidays">Holidays</Nav.Link>
                    <Nav.Link href="#flights">Flights</Nav.Link>
                    <Nav.Link href="#meals">Meals</Nav.Link>
                    <Nav.Link href="#promotions">Promotions</Nav.Link>
                    <Nav.Link href="#stays">Stays</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;