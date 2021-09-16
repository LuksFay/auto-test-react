import React from 'react';

const Notes = ({note}) => {
    return (
        <>
        <div>
            <p>title: {note.title}</p>
            <p>content: {note.content}</p>
        </div>
        </>
    )
}

export default Notes