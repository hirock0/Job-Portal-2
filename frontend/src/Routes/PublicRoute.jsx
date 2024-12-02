import { useState } from "react"
import { Navigate } from "react-router-dom"

const PublicRoute = ({children}) => {

    const [routeFlag,setRouteFlag]=useState(null)

    // if(routeFlag == null){
    //     return <Navigate to={"/"}></Navigate>
    // }

    return (
        <div>{children}</div>
    )
}

export default PublicRoute
