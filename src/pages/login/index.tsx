import React from 'react'
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import {AuthContextValues, useAuth} from '../../contexts/AuthProvider'
import {SignIn} from '../../components/signInForm'
import styles from './style.module.scss'

interface SignInProps {
    email: string
    password: string
}

export const Login: React.FC = (): React.JSX.Element => {

    const auth: AuthContextValues | null = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from || '/'

    const handleSignIn = (data: SignInProps): void => {
        if (auth) {
            auth.signIn(data, () => {
                navigate(from, {
                    replace: true
                })
            })
            console.log('SignIn data: ', data)
        }
    }

    if (auth && auth.user) {
        return <Navigate
            to="/"
            state={{
                from: location.pathname
            }}
            replace/>
    }

    return (
        <div className={styles.container}>
            <SignIn onSubmit={handleSignIn}/>
        </div>
    )
}
