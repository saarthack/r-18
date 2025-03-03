import React, { createContext } from 'react'

export const UserDataContext = createContext()

const UserContext = ({ children }) => {
    const brand = 'Sheryians'
    return (
        <div>
            <UserDataContext.Provider value={brand}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserContext