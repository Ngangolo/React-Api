import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <Header />
            <div className="m-2">
                {children}
            </div>
        </>

    )
}

export default Layout;