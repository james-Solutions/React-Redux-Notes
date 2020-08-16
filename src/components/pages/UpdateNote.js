import React, { Component } from 'react';
import AppNavBar from '../layout/AppNavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

class UpdateNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: '',
            key: this.props.match.params.key,
        };
    }


    componentDidMount() {
        axios.post('http://127.0.0.1:4002/note/read/single', {
            key: this.state.key
        }).then((res) => {
            if (res.data.response === 'failed'){
                this.setState({ title: 'failed to read the note'});
                this.setState({ content: 'failed to read the note'});
                window.location.replace('/notes');
            } else {
                this.setState({ title: res.data.response[0].title});
                this.setState({ content: res.data.response[0].comment});
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmission = (e) => {
        e.preventDefault();
        if (this.state.title && this.state.content) {
            axios.post('http://127.0.0.1:4002/note/update',{
                title: this.state.title,
                content: this.state.content,
                key: this.state.key
            }).then((res) =>{
                if (res.data.response === 'failed to update note') {
                    alert('Could not update the note');
                } else {
                    window.location.replace('/notes');
                }
            }).catch((err) => {
                console.log(err);
            });
            
            
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <AppNavBar />
                </Row>
                <Row className="justify-content-md-center mt-4">
                    <Col md="8">
                        <Card>
                        <Form onSubmit={this.handleSubmission}>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Control 
                                        type="text" 
                                        name="title"
                                        value={ this.state.title } 
                                        onChange={ this.handleChange }
                                        placeholder="Title of your note" 
                                    />
                                </Col>
                            </Row>
                            <Row className="">
                                <Col>
                                    <Form.Control
                                        as="textarea"
                                        name="content"
                                        value={ this.state.content }
                                        onChange={ this.handleChange }
                                        placeholder="Type your note here" />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Button block variant="info" type="submit">
                                    Update
                                </Button>
                            </Col>
                        </Row>
                        </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );        
    }
}


export default UpdateNote;