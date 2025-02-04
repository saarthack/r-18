import React from 'react'

const Card = (props) => {

    
    return (
        <div>
            <img 
            style={{
                left:`${props.x}%`,
                top:`${props.y}%`,
                rotate:`${props.rotate}deg`
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrSMEAqrUtTq7cXWnyy2DxiA0DNH1er605gisUjnjcaq49RPYNk9NLcfWAGKWMloyS10&usqp=CAU" alt="" />
        </div>
    )
}

export default Card