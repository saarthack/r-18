import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [randomX, setRandomX] = useState(0)
  const [randomY, setRandomY] = useState(0)
  const [rotate, setRotate] = useState(0)

  const changeMotuPosition = ()=>{
    setRandomX(Math.random()*95)
    setRandomY(Math.random()*90)
    setRotate(Math.random()*360)
  }

  return (
    <div>
      <Card x={randomX} y={randomY} rotate={rotate} />
      <button onClick={changeMotuPosition}>Change Position</button>
    </div>
  )
}

export default App