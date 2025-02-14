import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [imageURL, setImageURL] = useState('')

  const [allUsers, setAllUsers] = useState([])



  const submitHandler = (e) => {
    e.preventDefault()

    setAllUsers([...allUsers,{username,email,imageURL}])
    

    setUsername('')
    setEmail('')
    setImageURL('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          className='border-2 px-3 rounded py-1 m-2 inline-block'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          type="text"
          placeholder='Enter name' />

        <input
          className='border-2 px-3 rounded py-1 m-2 inline-block'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          type="text"
          placeholder='Enter Email' />

        <input
          className=' border-2 px-3 rounded py-1 m-2 inline-block'
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value)
          }}
          type="text"
          placeholder='Paste Image URL' />

        <button
          className='bg-emerald-600 text-white border-2 px-3 rounded py-1 m-2 inline-block'
        >Submit</button>
      </form>

      <div className='p-3'>
        {allUsers.map(function (elem, idx) {

          return <div key={idx}>
            <h2>{elem.username}</h2>
            <h4>{elem.email}</h4>
            <img src={elem.imageURL} className='h-10' alt="" />
          </div>
        })}
      </div>
    </div>
  )
}

export default App