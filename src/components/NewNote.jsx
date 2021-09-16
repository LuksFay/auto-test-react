import React, {useState} from 'react'
// import {v4 as uuidv4} from 'uuid';  //Id import
const shortid = require('shortid'); // Id import

const NewNote = ({showNote}) => {

    //entonces esta variable es un objeto que contiene title equivalente al primer input y content equivalente al segundo input 
    const [note,createNote] = useState({
        title:'',
        content: ''
    })
    
    // variable para solicitar que los campos esten completos
    const [campoVacio, setCampoVacio] = useState(false)
    
    
    
    // desestructurar la nota
    const {title,content} = note

    //En esta función le estoy diciendo al state de Title del archivo app que a traves del valor del input represente la informacion recibida
    // setTitle(e.target.value); (esta funcion representa al comentario de arriba, era para comprobar que la comunicacion funcionaba y se representaba correctamente)



    //el 'e' de writingNote equivale al onChange de cada input
    //esta funcion envia la info al componente, se puede ver a traves de la consola en la seccion de componetes que la información de cada input se envia correctamente a cada uno de los elementos del objeto note
    const writingNote = (e) => {
       createNote({
           ...note,
           [e.target.name]: e.target.value
       })
    }

    // este boton crea la nota y le agrega id
    const submitNote = (e) => {
        e.preventDefault();

        // este if va a validar que no se mande ninguna nota sin titulo o sin contenido
        if(title.trim() === '' || content.trim() === '') {setCampoVacio(true); return}
        setCampoVacio(false)

        
        // note.id = uuidv4();
        // console.log(note.id);
        note.id = shortid.generate()

        
        showNote(note)

        // usar el state de note para dejar los campos vacios
        createNote({
            title: '',
            content: ''
        })
        return(
            console.log('boton pulsado')
        )        
        // en caso de que el campo este vacio
    }
    return(
        <form onSubmit={submitNote}>
            <input type="text" name="title" onChange={writingNote} value={title} />
            <textarea name="content" id="" cols="30" rows="10" onChange={writingNote} value={content}></textarea>
            <input type="submit" value="Create"/>
            {campoVacio ? <p>Por favor llena todos los campos para crear la nota</p>:null}
        </form>
    )
    
}

export default NewNote