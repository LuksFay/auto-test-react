import React from 'react';
import PropTypes from 'prop-types';
const Notes = ({Note, deleteNotes, editNotes}) => {
    return (
        <>
        <div>
            <p>title: {Note.title}</p>
            <p>content: {Note.content}</p>
            <button onClick={() => editNotes(Note.id)}>edit</button>
            <button onClick={()=>deleteNotes(Note.id)}>delete</button>
        </div>
        </>
    )
}
Notes.propTypes = {
    Note: PropTypes.object.isRequired,
    deleteNotes: PropTypes.func.isRequired
}
export default Notes