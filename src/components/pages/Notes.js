import React, { Component } from 'react';
import NoteDisplay from '../layout/NoteDisplay';
import AddNote from '../layout/AddNote';
import Container from 'react-bootstrap/Container';
import AppNavBar from '../layout/AppNavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Notes extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <AppNavBar />
                </Row>
                <Row className="justify-content-md-center mt-4">
                    <Col md="8">
                        <Card>
                            <Card.Header>Add a note</Card.Header>
                            <AddNote />
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-4">
                    <Col md="8">
                        <Card >
                            <Card.Header>
                                <Row>
                                    <Col>Your Notes</Col>                                   
                                </Row>
                            </Card.Header>
                            <NoteDisplay />
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Notes;