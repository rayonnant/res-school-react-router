import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/home'
import NotFoundPage from './pages/notFound'
import CategoryPage from './pages/category'
import ElementPage from './pages/element'
import Layout from './components/layout'

function App(): React.JSX.Element {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/category/:type" element={<CategoryPage/>}/>
                <Route path="/category/:type/:id" element={<ElementPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </Layout>
    )
}

export default App
