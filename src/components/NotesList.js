import React from 'react'
import AddNote from './AddNote'
import Note from './Note'
const notesList = ({notes,setNotes ,handleAddnote, handleDeleteNote}) => {
    return (
        <div className='notes-list'>
           {
             notes.map((note)=>
             <Note
             id={note.id}
             text={note.text}
             date={note.date}
             key={note.id}
             handleDeleteNote={ handleDeleteNote}/>)  
           }
           <AddNote
           handleAddnote={handleAddnote}/>
        </div>
    )
}

export default notesList
