import React, { createContext, useContext, useState } from 'react'
import { AuthContextValues, User } from '../../interfaces'

const AuthContext = createContext<AuthContextValues | null>(null)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  const [user, setUser] = useState<null | {
    email: string
    password: string
  }>(() => {
    const storedUser: string | null = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })

  const signIn = (newUser: User, callback: (user: User | null) => void): void => {
    setUser((oldState) => ({
      ...oldState,
      email: newUser.email,
      password: newUser.password,
    }))
    localStorage.setItem('user', JSON.stringify(newUser))
    callback(user)
  }

  const signOut = (callback: (user: User | null) => void): void => {
    setUser(null)
    localStorage.removeItem('user')
    callback(user)
  }

  const value = {
    user,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
