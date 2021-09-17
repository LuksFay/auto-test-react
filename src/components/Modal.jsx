import React from 'react'
const Modal = ({editNotes}) => {

    return(
        <div>
            <h2>Edit your note</h2>
            <input type="text" />
            <textarea name="content" cols="30" rows="10" ></textarea>
            <button>Edit</button>
            <button onClick={()=> editNotes()}>Cancel</button>
        </div>
    )
}

export default Modal 