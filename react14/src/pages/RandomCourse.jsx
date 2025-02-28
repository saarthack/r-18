import React from 'react'
import { useParams } from 'react-router-dom'

const RandomCourse = () => {

    const {id} = useParams()


  return (
    <div>
        <h1>{id} Course Page</h1>
    </div>
  )
}

export default RandomCourse