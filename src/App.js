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
  const editNotes = () => {
    setModal(!modal)
  }
  const deleteNotes = (id) => {
    const newNotes = postedNotes.filter(note => note.id !== id);
    setPostedNote(newNotes)
  }
  return (
    <>
    <div  className="container">
    <NewNote showNote={showNote}/>
    <div>
      {postedNotes.map((Note)=>{
        return(
          <Notes key={Note.id} Note={Note}  deleteNotes={deleteNotes} editNotes={editNotes}/>
        )
      })}
    </div>
    {modal ? <Modal editNotes={editNotes}/> : null}
    </div>
    </>
  );
}



export default App;
