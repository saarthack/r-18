import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const {id} = useParams()

  return (
    <div>
        <h1>{id} Course Detail Page</h1>
    </div>
  )
}

export default CourseDetail