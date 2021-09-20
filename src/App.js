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
  const openModal = (id) => {
    setModal(!modal)
    console.log('modal',id);
  }
  const deleteNotes = (id) => {
    const newNotes = postedNotes.filter(note => note.id !== id);
    setPostedNote(newNotes)
  }

  const editNotes = (Note) => {
    console.log('edit', Note);
    
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


      {/* {modal ? <Modal openModal={openModal} editNotes={editNotes} postedNotes={postedNotes}/> : null} */}
      {modal 
      ? postedNotes.map((Note)=>{
        console.log('mapeada',Note.id)
        return(
            <Modal key={Note.id} openModal={openModal} editNotes={editNotes} Note={Note} /> 
            
        )
        })
        : null
      }
    
    
    </div>


    </>
  );
}



export default App;
