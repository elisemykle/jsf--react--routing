
import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

export default function App() {
    return (
        <div class="App">
            <Navbar bg="dark" variant="dark" expand="lg">
            <NavLink to="/" exact>
            <Navbar.Brand>Website Name</Navbar.Brand>
            </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link">Home</NavLink>
                        <NavLink to="/aboutus" className="nav-link">About</NavLink>
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
