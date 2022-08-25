import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../components/pages/Home'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={ <Home /> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
