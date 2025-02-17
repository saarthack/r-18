import React from 'react'

const Form = (props) => {
    return (
        <div>
            <form onSubmit={(e) => {
                props.submitHandler(e)
            }}>
                <input
                className='border-2 rounded'
                value={props.username}
                onChange={(e)=>{
                    props.setUsername(e.target.value)
                }}
                type="text" placeholder='Enter User Name' />
                <input 
                className='border-2 rounded'
                value={props.position}
                onChange={(e)=>{
                    props.setPosition(e.target.value)
                }}
                type="text" placeholder='Enter User Position' />
                <input 
                className='border-2 rounded'
                value={props.imageURL}
                onChange={(e)=>{
                    props.setImageURL(e.target.value)
                }}
                type="text" placeholder='Paste Image URL' />
                <button className='rounded bg-pink-400 text-white font-semibold'>Submit</button>
            </form>
        </div>
    )
}

export default Form