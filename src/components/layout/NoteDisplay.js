import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { removeNote } from '../../redux/actions/actions';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class NoteDisplay extends Component {
    removeNote = (index, key) => {
        axios.post('http://127.0.0.1:4002/note/remove', {
            key: key
        }).then((res) => {
            console.log(res);
            this.props.removeNote(index);
        }).catch((err) => {
            console.log(err);
        })        
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
                                <Button block variant="danger" onClick={() => this.removeNote(index, note.key)}>X</Button>
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