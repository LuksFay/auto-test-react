import React from 'react'
import './Modal.css'
const Modal = ({openModal, editNotes, selectedNote, setSelectedNote}) => {
    const handleValue = (e) => {
        setSelectedNote({
            ...selectedNote,
            [e.target.name]: e.target.value
        })
        console.log(selectedNote)
     }
    return(
        <>
        <div className="filter"></div>
        <div className="modal-bg">
            <div className="order">
                <h2>Edit</h2>
                <input name="title" type="text" className="input-text input-modal" value={selectedNote.title} onChange={(e) =>  handleValue(e)}/>
                <textarea name="content" className="text-area area-modal" value={selectedNote.content} onChange={(e) =>  handleValue(e)}></textarea>
                <button onClick={()=>editNotes(selectedNote)} className="button" >Edit</button>
                <button onClick={()=> openModal()} className="button-cancel">Cancel</button>
            </div>        
        </div>
        </>
    )
}

export default Modal 