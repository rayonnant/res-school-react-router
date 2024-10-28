import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Layout} from './components/layout'
import {HomePage} from './pages/home'
import {NotFoundPage} from './pages/notFound'
import {CategoryPage} from './pages/category'
import {ElementPage} from './pages/element'
import {AuthProvider} from './contexts/AuthProvider'
import {Login} from './pages/login'
import {PrivateRoute} from './components/privateRoute'

export const App: React.FC = (): React.JSX.Element => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/category/:type" element={<PrivateRoute><CategoryPage/></PrivateRoute>}/>
                    <Route path="/category/:type/:id" element={<PrivateRoute><ElementPage/></PrivateRoute>}/>
                    <Route path="/not-found" element={<NotFoundPage/>}/>
                    <Route path="*" element={<Navigate to="/not-found" replace/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    )
}

