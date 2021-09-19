import React, {useState} from 'react'
import PropTypes from 'prop-types';
import './NewNote.css';
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
        <form onSubmit={submitNote} className="order">
            <input type="text" name="title" onChange={writingNote} value={title} className="input-text" maxLength="50"/>
            <textarea name="content" onChange={writingNote} value={content} className="text-area" maxLength="200"></textarea>
            <input type="submit" value="Create" className="button"/>
            {campoVacio ? <p className="alert">Por favor llena todos los campos para crear la nota</p>:null}
        </form>
    )  
}
NewNote.propTypes = {
    showNote: PropTypes.func.isRequired
}
export default NewNote