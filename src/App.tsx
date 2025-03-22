import React, { lazy, FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { AuthProvider } from './contexts'
import { PrivateRoute } from './components'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Category = lazy(() => import('./pages/Category'))
const Element = lazy(() => import('./pages/Element'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const App: FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/category/:type"
            element={
              <PrivateRoute>
                <Category />
              </PrivateRoute>
            }
          />
          <Route
            path="/category/:type/:id"
            element={
              <PrivateRoute>
                <Element />
              </PrivateRoute>
            }
          />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
