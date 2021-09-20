import React from 'react'
import './Modal.css'
const Modal = ({openModal, editNotes, Note}) => {

    return(
        <>
        <div className="filter"></div>
        <div className="modal-bg">
            <div className="order">
                <h2>Edit</h2>
                <input type="text"className="input-text input-modal"/>
                <textarea name="content" className="text-area area-modal" ></textarea>
                <button onClick={()=>editNotes(Note)} className="button" >Edit</button>
                <button onClick={()=> openModal()} className="button-cancel">Cancel</button>
            </div>        
        </div>
        </>
    )
}

export default Modal 