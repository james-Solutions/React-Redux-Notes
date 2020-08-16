import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { removeNote, addNote } from '../../redux/actions/actions';
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

    updateNote = (index, key, title, content) => {
        if (title && content && key) {
            console.log(`Index: ${index} -- Key: ${key} -- Title: ${title} -- Content: ${content}`);
            
            // this.props.updateNote(title, content, key);
        }
    }

    componentDidMount() {
        // Call read all from notes
        axios.get('http://127.0.0.1:4002/note/read').then((res) => {
            for (const sql_note of res.data.response){
                this.props.addNote(sql_note.title, sql_note.comment, sql_note.noteID);
            }
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
                                <Button block variant="danger" onClick={() => this.removeNote(index, note.key)}>Delete</Button>
                                <Button block variant="info" >
                                    <Link to={{
                                        pathname: `/notes/update/${note.key}`,
                                        state: {
                                            title: note.title,
                                            content: note.content
                                        }
                                    }}>Update</Link></Button>
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
    removeNote: removeNote,
    addNote: addNote,
  };
  
  export default connect(mapStateToProps, mapDispatchToProprs)(NoteDisplay);