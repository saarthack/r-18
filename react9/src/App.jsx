import React, { useState } from 'react'
import Form from './components/Form'
import Users from './components/Users'

const App = () => {

  const [username, setUsername] = useState('')
  const [position, setPosition] = useState('')
  const [imageURL, setImageURL] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(username, imageURL, position);

    setAllUsers([...allUsers, { username, position, imageURL }])

    setUsername('')
    setPosition('')
    setImageURL('')
  }

  const deleteHandler = (i)=>{
    const copyUser = [...allUsers]
    copyUser.splice(i,1)

    setAllUsers(copyUser)
  }

  return (
    <div>
      <Form username={username} setUsername={setUsername} position={position} setPosition={setPosition} imageURL={imageURL} setImageURL={setImageURL} submitHandler={submitHandler} />
      <Users deleteHandler={deleteHandler} allUsers={allUsers} />
    </div>
  )
}

export default App