import React from 'react'
import Head from './Head';
import Side from './Side'
import Header from './Header'

const Layout = ({ children }) => {
    return (
     <>
   {/* <!-- Pre-loader start --> */}
    {/* <div className="theme-loader" >
        <div className="ball-scale">
            <div></div>
        </div>
    </div> */}
    
    {/* <!-- Pre-loader end --> */}
    {/* <!-- Menu header start --> */}
    <div id="pcoded" className="pcoded iscollapsed" theme-layout="vertical" vertical-placement="left" pcoded-device-type="phone"
    vertical-layout="wide"  vertical-nav-type="offcanvas"  vnavigation-view="view1"> 
        <div className="pcoded-overlay-box"></div>
        <div className="pcoded-container navbar-wrapper">

         <Head/>
          {/* <!-- Sidebar inner chat end--> */}
          <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <Side/>
                <div className="m-2">
                  {children}
                </div>
            </div>
        </div>
    </div>
    </div>

    </>

    )
}

export default Layout;