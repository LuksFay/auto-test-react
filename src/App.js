import React, {useState,useEffect} from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes';
import Modal from './components/Modal';
import './App.css'



function App() {

  let initialNotes = JSON.parse(localStorage.getItem('postedNotes'));
  if(!initialNotes){
    initialNotes = [];
  }
  const [postedNotes,setPostedNote] = useState(initialNotes);
  const [modal, setModal] = useState(false)
  const [selectedNote, setSelectedNote] = useState({})



  useEffect(()=>{
    let initialNotes = JSON.parse(localStorage.getItem('postedNotes'));
    if(initialNotes){
      localStorage.setItem('postedNotes',JSON.stringify(postedNotes))
    }else{
      localStorage.setItem('postedNotes',JSON.stringify([]));
    }
  },[postedNotes]);




  const showNote = (postedNote) => {
    setPostedNote(
      [
        ...postedNotes,
        postedNote
      ]
    )
  }
  const openModal = (note) => {
    setModal(!modal)
    setSelectedNote(note)
    console.log('modal',note);
  }
  const deleteNotes = (id) => {
    const newNotes = postedNotes.filter(note => note.id !== id);
    setPostedNote(newNotes)
  }

  const editNotes = (Note) => {
    const notasEditadas = postedNotes.map((nota)=>{
      if(Note.id === nota.id){
        return Note
      }else{
       return nota
      }
    })
    setPostedNote(notasEditadas)
    setModal(!modal)
  }



  
  return (
    <>
    <div  className="container">
      
      <NewNote showNote={showNote}/>
      
      <div className="prueba">
        {postedNotes.map((Note)=>{
          return(
            <Notes key={Note.id} Note={Note}  deleteNotes={deleteNotes} openModal={openModal}/>
          )
        })}
      </div>


      {modal ? <Modal openModal={openModal} editNotes={editNotes} selectedNote={selectedNote} setSelectedNote={setSelectedNote}/> : null}
      
    
    </div>


    </>
  );
}



export default App;
