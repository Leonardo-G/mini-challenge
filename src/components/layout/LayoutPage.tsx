import React, { FC, ReactNode } from 'react'
import { Navbar } from '../ui/Navbar'

interface Props {
    titleHead: string;
    children: ReactNode;
}

export const LayoutPage: FC<Props> = ({ titleHead, children }) => {

    document.title = titleHead

    return (
        <>
            <header style={{ width: "100%" }}>
                <Navbar />
            </header>
            <main>
                { children }
            </main>
            <footer></footer>
        </>
    )
}
