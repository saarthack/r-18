import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Card = () => {

    const data = useContext(UserDataContext)

    return (
        <div>
            <h1>This is Card {data}</h1>

        </div>
    )
}

export default Card