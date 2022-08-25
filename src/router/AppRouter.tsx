import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { Contacto } from '../components/pages/Contacto';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={ <Home /> }/>
                    <Route path='/contact' element={ <Contacto /> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
