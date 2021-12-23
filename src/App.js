import './App.css';
import NotesList from './components/NotesList';
import  {useEffect, useState} from 'react'
import {nanoid} from 'nanoid'
import Search from './components/Search';
import Header from './components/Header';
function App() {
 const[notes,setNotos] = useState([
   {
    id:nanoid(),
    text:'This is my first note',
    date:'12/22/2021'
   },
   {
    id:nanoid(),
    text:'This is my second note',
    date:'12/01/2021'
   }, {
    id:nanoid(),
    text:'This is my third note',
    date:'08/22/2021'
   },
   {
    id:nanoid(),
    text:'This is my new note',
    date:'30/22/2021'
   }
])
  
useEffect(()=>{
  const saveNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
  )
  if(saveNotes){
    setNotos(saveNotes)
  }
},[])


 useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
 },[notes]);


  const[searchText,setSearchText] =  useState('')

   const[darkMode,setDarkMode] = useState(false)

const addNote = (text) =>{
 const date = new Date()
  const newNote = {
    id:nanoid(),
    text:text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes , newNote]
  setNotos(newNotes)
}

const deleteNote = (id) =>{
 const newNotes= notes.filter((note)=>note.id !== id)
 setNotos(newNotes)
}
  return (
  <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote = {setSearchText}/>
     <NotesList
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
      setNotos={setNotos}
      handleAddNote = {addNote}
      handleDeleteNote={deleteNote}/>
    </div>
    </div>
  );
}

export default App;
