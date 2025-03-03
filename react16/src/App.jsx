import React, { useContext } from 'react'
import Card from './components/Card'
import { UserDataContext } from './context/UserContext'

const App = () => {
  
  const data = useContext(UserDataContext)

  return (
    <div>
      {data}
      <Card />
    </div>
  )
}

export default App