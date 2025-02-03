import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('Jatin')
  const [age, setAge] = useState(19)

  const changeUser = ()=>{
    setUsername('Harsh')
    setAge(23)
  }

  return (
    <div>
      <h1>{username} {age}</h1>
      <button onClick={changeUser}>change</button>
    </div>
  )
}

export default App