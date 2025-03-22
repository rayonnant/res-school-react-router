import React, { FC } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'
import { SignInForm } from '../../components'
import styles from './style.module.scss'
import { AuthContextValues, User } from '../../interfaces'
import { ErrorBoundary } from '../../components'

const Login: FC = () => {
  const auth: AuthContextValues | null = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from || '/'

  const handleSignIn = (data: User): void => {
    if (auth) {
      auth.signIn(data, (): void => {
        navigate(from, {
          replace: true,
        })
      })
      // console.log('SignIn data: ', data)
    }
  }

  if (auth && auth.user) {
    return (
      <Navigate
        to="/"
        state={{
          from: location.pathname,
        }}
        replace
      />
    )
  }

  return (
    <div className={styles.container}>
      <ErrorBoundary>
        <SignInForm onSubmit={handleSignIn} />
      </ErrorBoundary>
    </div>
  )
}

export default Login
