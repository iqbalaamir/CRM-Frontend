import React, { useState } from 'react'
import { UserContext } from './UserContext'
const UserStare = ({children}) => {
    const [userEditData, setUserEditData] = useState()
    return (
        <UserContext.Provider value={{userEditData, setUserEditData}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserStare