import React from 'react'
import { useState } from 'react/cjs/react.development'

const AddNote = ({handleAddnote}) => {
    const[noteText,setNoteText] = useState('')

    const handleChange = (event) =>{
      
      if(characterLimit-event.target.value.length>=0){
          setNoteText(event.target.value)
      }
    }

    const handleSaveClick = () =>{
        if(noteText.trim().length>0){
            setNoteText('') 
              handleAddnote(noteText)
        }
     
    }

    const characterLimit = 200
    return (
        <div className='note new'> 
            <textarea
             rows='8'
            cols='10'
            placeholder='Type to add a note...'
            onChange={handleChange}
            value={noteText}>
            </textarea>
            <div className='note-footer'>
             <small>{characterLimit-noteText.length} Remaining</small>
             <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
 