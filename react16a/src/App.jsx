import React, { useContext } from 'react'
import Nav from './components/Nav';
import { ThemeDataContext } from './context/ThemeContext';

const App = () => {

  const [theme,setTheme] = useContext(ThemeDataContext)



  const btnClicked = () => {
    setTheme('Dark')
  }
  return (
    <div>
      <h1>This is App </h1>
      <button onClick={btnClicked}>Change Theme</button>
      <Nav />

      <h1>Theme is {theme}</h1>
    </div>
  )
}

export default App