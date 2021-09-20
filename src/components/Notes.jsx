import React from 'react';
import PropTypes from 'prop-types';
import './Notes.css';
const Notes = ({Note, deleteNotes, openModal}) => {
    return (
        <>
        <div className="order note-bg">
            <div>
            <h4>{Note.title}</h4>
            <p>{Note.content}</p>
            </div>
            <div className="note-buttons-div">
            <button onClick={() => openModal(Note.id)} className="note-buttons">E</button>
            <button onClick={()=>  deleteNotes(Note.id)} className="note-buttons">D</button>
            </div>
        </div>
        </>
    )
}
Notes.propTypes = {
    Note: PropTypes.object.isRequired,
    deleteNotes: PropTypes.func.isRequired
}
export default Notes