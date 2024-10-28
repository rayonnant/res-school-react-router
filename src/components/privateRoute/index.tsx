import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'
import {AuthContextValues, useAuth} from '../../contexts/AuthProvider'

export const PrivateRoute = ({children}: {children: React.JSX.Element}) => {
    const auth: AuthContextValues | null = useAuth()
    const location = useLocation()

    if (auth === null || auth.user === null) {
        return <Navigate
            to="/login"
            state={{
                from: location.pathname
            }}
            replace/>
    }

    return children
}
