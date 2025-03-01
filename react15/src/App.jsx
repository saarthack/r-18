import React, { useState } from 'react'

const App = () => {

  const [userStatus, setUserStatus] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()

    const user = JSON.parse(localStorage.getItem('user'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    if(email == admin.email && password == admin.password){
      setUserStatus('admin')
    }else if(email == user.email && password == user.password){
      setUserStatus('user')
    }else{
      setUserStatus('error')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        type="text" placeholder='Enter email' />
        <input 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        type="password" placeholder='Enter password' />
        <button>Submit</button>
      </form>

      <h1 className={userStatus}>{userStatus}</h1>
    </div>
  )
}

export default App