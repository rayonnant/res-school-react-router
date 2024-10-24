import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Layout} from './components/layout'
import {HomePage} from './pages/home'
import {NotFoundPage} from './pages/notFound'
import {CategoryPage} from './pages/category'
import {ElementPage} from './pages/element'

export const App: React.FC = (): React.JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/category/:type" element={<CategoryPage/>}/>
                <Route path="/category/:type/:id" element={<ElementPage/>}/>
                <Route path="/not-found" element={<NotFoundPage/>}/>
                <Route path="*" element={<Navigate to="/not-found" replace/>}/>
            </Route>
        </Routes>
    )
}

