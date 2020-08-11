import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


class AppNavBar extends Component {
    render() {
        return (
            <Container fluid>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/notes">
                                Notes
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/notes">Welcome, Name</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default AppNavBar;