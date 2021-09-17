import React, {useState,useEffect} from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes';
function App() {

  let initialNotes = JSON.parse(localStorage.getItem('postedNotes'));
  if(!initialNotes){
    initialNotes = [];
  }
  const [postedNotes,setPostedNote] = useState(initialNotes);
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
  const deleteNotes = (id) => {
    console.log(id);
    const newNotes = postedNotes.filter(note => note.id !== id);
    setPostedNote(newNotes)
  }
  return (
    <>
    <NewNote showNote={showNote}/>
    <div>
      {postedNotes.map((Note)=>{
        return(
          <Notes key={Note.id} Note={Note}  deleteNotes={deleteNotes}/>
        )
      })}
    </div>
    </>
  );
}
export default App;
