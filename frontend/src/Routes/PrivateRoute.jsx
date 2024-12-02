import { useState } from "react"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
    const[user,setUser]=useState(null)
    if(user == null){
        return <Navigate to={"/user/v1/login"}></Navigate>
    }
    return (
        <div>{children}</div>
    )
}

export default PrivateRoute
