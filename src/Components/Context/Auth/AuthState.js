import React from 'react'
import { AuthContext } from './AuthContext'
const AuthState = (props) => {
    // var token = "adminToken";
// var decoded = jwt_decode("adminToken");
 
    function LoadUser() {
        if (localStorage.getItem('adminToken')) {
            return true
        }
        else {
            return false
        }
    }
    return (
        <AuthContext.Provider value={{ LoadUser }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthState
