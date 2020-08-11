import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import AppNavBar from '../layout/AppNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <AppNavBar />
                </Row>
                <Row className="justify-content-md-center mt-4">
                    <Col md="8">
                        <Card>
                            <Card.Header>Latest</Card.Header>
                            <Card.Body>
                                <Card.Title>Welcome</Card.Title>
                                <Card.Text>
                                    The React Notes App with Redux and Bootstrap is currently under development! 
                                    The Link below will take you to make a new note.
                                </Card.Text>
                                <Button variant="dark" href="/notes">Go to notes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;