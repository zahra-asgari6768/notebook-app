import './App.css';
import NotesList from './components/NotesList';
import  {useEffect, useState} from 'react'
import {nanoid} from 'nanoid'
import Search from './components/Search';
import Header from './components/Header';
import DataFetching from './components/DataFetching';

function App() {
  const[notes,setNotes] = useState([
    {
      id:nanoid(),
      text:'This is my first note',
      date:'11/14/2021'
    },
    {
      id:nanoid(),
      text:'This is my second note',
      date:'01/14/2021'
    },
    {
      id:nanoid(),
      text:'This is my third note',
      date:'05/02/2021'
    },
    {
      id:nanoid(),
      text:'This is my new note',
      date:'07/10/2021'
    }
  ])
 
useEffect(()=>{
 const saveNotes = JSON.parse(localStorage.getItem('react-notes-app-date'))
 if(saveNotes){
   setNotes(saveNotes)
 }
},[])


  useEffect(()=>{
   localStorage.setItem('react-notes-app-date' , JSON.stringify(notes))
  },[notes])
  const [searchText , setSearchText] = useState('')
  
 const[darkMode,setDarkMode] = useState(false)

 const addNote = (text) =>{
   const date = new Date()
   const newNote = {
     id:nanoid(),
     text:text,
     date:date.toLocaleDateString()
   }
   const newNotes = [...notes , newNote]
   setNotes(newNotes)
 }
 const deleteNote = (id) =>{
    const newNotes = notes.filter((note)=>note.id !==id)
    setNotes(newNotes)
 }
  return (
     <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote = {setSearchText}/>
     <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
     setNotes={setNotes}
     handleAddnote={addNote}
     handleDeleteNote={deleteNote}/>
     <DataFetching/>
    </div>
    </div>
  );
}

export default App;
