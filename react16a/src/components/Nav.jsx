import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Nav = () => {

    const [theme,setTheme] = useContext(ThemeDataContext)

    const btnClicked = () => {
        setTheme('dark')
    }
    return (
        <div className='nav'>
            <h1>This is NavBar</h1>
            <button onClick={btnClicked}>Change Theme</button>
        </div>
    )
}

export default Nav