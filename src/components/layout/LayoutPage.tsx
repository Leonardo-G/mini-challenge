import React, { FC, ReactNode } from 'react'
import { Navbar } from '../ui/Navbar'

interface Props {
    children: ReactNode
}

export const LayoutPage: FC<Props> = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                { children }
            </main>
            <footer></footer>
        </>
    )
}
