import { useState } from "react";
import { useContext } from "react";
import {Navigate} from "react-router-dom"
import {AuthContext} from "../Context/AuthContext"
import Loader from "./Loader"


function PrivateRoute({children}) {
    const {authState} = useContext(AuthContext)
    if(!authState.isAuth){
        return <Navigate to="/login" />
    }
    return children;
}

export default PrivateRoute;
