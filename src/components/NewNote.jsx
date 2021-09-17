import React, {useState} from 'react'
import PropTypes from 'prop-types';
// import {v4 as uuidv4} from 'uuid';  //Id import
const shortid = require('shortid'); // Id import
const NewNote = ({showNote}) => {
    const [note,createNote] = useState({
        title:'',
        content: ''
    })
    const [campoVacio, setCampoVacio] = useState(false)
    const {title,content} = note
    const writingNote = (e) => {
       createNote({
           ...note,
           [e.target.name]: e.target.value
       })
    }
    const submitNote = (e) => {
        e.preventDefault();
        if(title.trim() === '' || content.trim() === '') {setCampoVacio(true); return}
        setCampoVacio(false)
        note.id = shortid.generate()    
        showNote(note)
        createNote({
            title: '',
            content: ''
        })
      
    }
    return(
        <form onSubmit={submitNote}>
            <input type="text" name="title" onChange={writingNote} value={title} />
            <textarea name="content" cols="30" rows="10" onChange={writingNote} value={content}></textarea>
            <input type="submit" value="Create"/>
            {campoVacio ? <p>Por favor llena todos los campos para crear la nota</p>:null}
        </form>
    )  
}
NewNote.propTypes = {
    showNote: PropTypes.func.isRequired
}
export default NewNote