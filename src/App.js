import React, {useState} from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes';
function App() {
  const [postedNotes,setPostedNote] = useState([]);

  const showNote = (postedNote) => {
    // console.log(postedNote);
    setPostedNote(
      [
        ...postedNotes,
        postedNote
      ]
    )
  }

  return (
    <>
    <NewNote showNote={showNote}/>
    <div>
      {postedNotes.map((note)=>{
        return(
          <Notes key= {note.id} note={note}/>
        )
      })}
    </div>
    </>
  );
}

export default App;
