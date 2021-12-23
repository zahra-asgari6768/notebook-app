import React from 'react'

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className='header'>
            <h1>Note</h1>
            <button className='save' 
            onClick={()=>handleToggleDarkMode((previosDarkMode)=> !previosDarkMode )}>
                Toggle Mode</button>
        </div>
    )
}

export default Header
