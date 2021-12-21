import React from 'react'
import {MdDeleteForEver} from 'react-icons/md'
const Note = () => {
    return (
        <div className='note'>
            <span>Hello! This is our first note! Hurray</span>
            <div className='note-footer'></div>
            <small>12/21/2021</small>
            <MdDeleteForEver className="delete-icon" size= '1.3em'/>
        </div>
    )
}

export default Note
