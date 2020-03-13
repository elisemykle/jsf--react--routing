import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";

export default function App() {
    return (
        <div class="App">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Website Name</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/aboutus">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                <Home />
                <AboutUs />
            </Container>
        </div>
    );
}