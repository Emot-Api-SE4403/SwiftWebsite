import React, { useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";


export const PrivateRoute = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null)  
    useEffect(() => {
        let token = sessionStorage.getItem('jwt')
            if(token){
                let tokenExpiration = jwt_decode(token).exp;
                let dateNow = new Date();

                if(tokenExpiration < dateNow.getTime()/1000){
                    setIsAuthenticated(false)
                }else{
                    setIsAuthenticated(true)
                }
            } else {
            setIsAuthenticated(false)
            }
        // eslint-disable-next-line
        }, [])

    if(isAuthenticated === null){
        return <></>
    }
        //<Navigate to="/login" replace />
    if(isAuthenticated){
        return(props.children)
    }

    if(!isAuthenticated){
        return (<Navigate to="/login" replace />)
    }
  
};