import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
const note = ({date,id,text , handleDeleteNote}) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
             <small>{date}</small>
			 <MdDeleteForever className='delete-icons' size='1.3em'
			 onClick={()=> handleDeleteNote(id)}/>
			</div>
		</div>
	)
}

export default note
