import React from 'react'
const Modal = () => {

    const funcCancel = () =>{
        console.log('hola')
    }
    const funcEdition = () =>{
        console.log('hola')
        
    }
    return(
        <div>
            <h2>Edit your note</h2>
            <input type="text" />
            <textarea name="content" cols="30" rows="10" ></textarea>
            <button onChange={funcEdition}>Edit</button>
            <button onChange={funcCancel}>Cancel</button>
        </div>
    )
}

export default Modal