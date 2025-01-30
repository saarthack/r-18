import React from 'react'

const Card = (props) => {

    
    return (
        <div className='card'>
            <img src={props.user.img} alt="" />
            <h1>{props.user.username}</h1>

            <h3>{props.user.age}, {props.user.city}</h3>
        </div>
    )
}

export default Card