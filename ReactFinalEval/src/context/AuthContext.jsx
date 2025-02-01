import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


export const AuthContext = createContext();

function AuthContext({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem(token) ? true : false
    })
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log(token)
    }, [token])


    // i require login logot

    const login = (authToken) => {
        setIsAuthenticated(true)
        setToken(authToken)
        localStorage.setItem(authToken)
        navigate(location.state?.from || "/")
    }

    const logout = () => {
        isAuthenticated(false)
        setToken(null)
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext


