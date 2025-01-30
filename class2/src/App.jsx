import React from 'react'
import Card from './components/Card'
import users from './assets/Users';

const App = () => {


  return (
    <div>
      
      {users.map(function(elem){

        return <Card user={elem} />
      })}
      


    </div>
  )
}

export default App
