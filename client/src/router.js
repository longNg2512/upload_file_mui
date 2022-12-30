import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as pages from './pages/index'

const Routess = () => (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<pages.HomePage />} />
                <Route path="/posts" element={<pages.PostPage />} />
            </Routes>
        </BrowserRouter>
    </div>
)
export default Routess
