import React from 'react'

import { BrowserRouter, Routes } from 'react-router-dom'

import { LayoutPage } from '../components/layout/LayoutPage';

export const AppRouter = () => {
    return (
        <LayoutPage>
            <BrowserRouter>
                <Routes>

                </Routes>
            </BrowserRouter>
        </LayoutPage>
    )
}
