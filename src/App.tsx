import React, { lazy, FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout'
import { AuthProvider } from './contexts/AuthProvider'
import { PrivateRoute } from './components/privateRoute'

const Home = lazy(() => import('./pages/home'))
const Login = lazy(() => import('./pages/login'))
const Category = lazy(() => import('./pages/category'))
const Element = lazy(() => import('./pages/element'))
const NotFound = lazy(() => import('./pages/notFound'))

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
