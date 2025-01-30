import React from 'react'
import Card from './components/Card'

const App = () => {

  const arr = ['Aman','Sandeep','Rishi','Dheeraj','Anu']

  return (
    <div className='flex gap-2 p-4'>
      {arr.map(function(elem){

        return <Card name={elem} />
      })}

    </div>
  )
}

export default App