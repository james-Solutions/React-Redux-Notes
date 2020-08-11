import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { addNote } from '../../redux/actions/actions';

class AddNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmission = (e) => {
        e.preventDefault();
        const { title, content } = this.state;
        if (title && content){
            this.props.addNote(title, content);
            this.setState({ title: '', content: ''});
        } else{
            alert('Please input all fields');
        }        
    }


    render() {
        return (
            <React.Fragment>
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
                            <Button block variant="success" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    {
      addNote: addNote
    }
  )(AddNote);