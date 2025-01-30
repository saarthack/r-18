import React from 'react'

const Card = (props) => {
  return (
    <div >
        <h1 className='bg-black text-white px-5 py-2 rounded mb-2'>{props.name}</h1>
    </div>
  )
}

export default Card