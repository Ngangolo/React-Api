import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            {/* <!-- Pre-loader start --> */}
            <div className="theme-loader">
                <div className="ball-scale">
                    <div></div>
                </div>
            </div>
            {/* <!-- Pre-loader end --> */}

            <div id="pcoded" className="pcoded">
                <div className="pcoded-overlay-box"></div>
                <div className="pcoded-container navbar-wrapper">
                    <Sidebar />
                    <Header />
                    <div className="container">
                        {children}
                    </div>

                </div>
            </div>
        </>

    )
}

export default Layout;