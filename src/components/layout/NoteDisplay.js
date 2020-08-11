import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { removeNote } from '../../redux/actions/actions';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NoteDisplay extends Component {
    removeNote = (index) => {
        this.props.removeNote(index);
    }
    render() {
        const notes = this.props.notes;
        if (notes){
            return (
                <ListGroup as="ul" variant="flush">
                    {notes.map((note, index) => 
                    (
                        <Row key={index} className="mt-2 mb-2">
                            <Col className="ml-2">
                                <p>Title: {note.title}</p>
                                <ListGroup.Item as="li" >{note.content}</ListGroup.Item>
                                <br />
                                <Button block variant="danger" onClick={() => this.removeNote(index)}>X</Button>
                            </Col>
                        </Row>
                    ))}
                </ListGroup>
            );
        } else {
            return (
                <div>No Notes</div>
            );
        }
        
    }
}

const mapStateToProps = state => {
    return {
      notes: state.notes
    };
  };
  
  const mapDispatchToProprs = {
    removeNote: removeNote
  };
  
  export default connect(mapStateToProps, mapDispatchToProprs)(NoteDisplay);