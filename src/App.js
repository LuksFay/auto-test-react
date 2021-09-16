import React, {useState} from 'react'
import Title from './components/Title'
import ShowTitle  from './components/ShowTitle'
function App() {
  const [title,setTitle] = useState('');
  return (
    <>
    <Title setTitle={setTitle} title={title}/>
    <ShowTitle title={title}/>
    
    </>
  );
}

export default App;
