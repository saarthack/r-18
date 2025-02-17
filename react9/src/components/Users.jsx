import React from 'react'

const Users = (props) => {
    return (
        <div>
            {props.allUsers.map(function (elem, idx) {

                return <div key={idx} className='bg-black text-center px-6 py-3 rounded text-white inline-block m-2'>
                    <img className='h-20 mx-auto mb-2 w-20 rounded-full' src={elem.imageURL} alt="" />
                    <h3 className='text-xl'>{elem.username}</h3>
                    <h4>{elem.position}</h4>
                    <button onClick={()=>{
                        props.deleteHandler(idx)
                    }} className='bg-red-500 text-white rounded'>Delete</button>
                </div>
            })}
        </div>
    )
}

export default Users