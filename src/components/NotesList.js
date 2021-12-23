import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
const notesList = ({notes , setNotos ,handleAddNote , handleDeleteNote}) => {
    return (
        <div className='notes-list'>
        {
            notes.map((note)=>
            <Note
            id={note.id}
            text={note.text}
            key={note.id}
            date={note.date}
            handleDeleteNote={ handleDeleteNote}/>)
        }
        <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default notesList
