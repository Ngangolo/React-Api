import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            {/* <!-- Pre-loader start --> */}
            <div class="theme-loader">
                <div class="ball-scale">
                    <div></div>
                </div>
            </div>
            {/* <!-- Pre-loader end --> */}

            <div id="pcoded" class="pcoded">
                <div class="pcoded-overlay-box"></div>
                <div class="pcoded-container navbar-wrapper">
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