import React from 'react'

function Header() {
  return (
    <nav className="navbar header-navbar pcoded-header" header-theme="theme4">
    <div className="navbar-wrapper">
        <div className="navbar-logo">
            <a className="mobile-menu" id="mobile-collapse" href="#!">
                <i className="ti-menu"></i>
            </a>
            <a className="mobile-search morphsearch-search" href="/#">
                <i className="ti-search"></i>
            </a>
            <a href="index-2.html">
                <img className="img-fluid" src="assets/images/logo.png" alt="Theme-Logo" />
            </a>
            <a className="mobile-options">
                <i className="ti-more"></i>
            </a>
        </div>
        <div className="navbar-container container-fluid">
            <div>
                <ul className="nav-left">
                    <li>
                        <div className="sidebar_toggle"><a href="javascript:void(0)"><i className="ti-menu"></i></a></div>
                    </li>
                    <li>
                        <a className="main-search morphsearch-search" href="/#">
                            <i className="ti-search"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/#!" onclick="javascript:toggleFullScreen()">
                            <i className="ti-fullscreen"></i>
                        </a>
                    </li>
                    
                </ul>
                <ul className="nav-right">
                    <li className="header-notification lng-dropdown">
                        <a href="/#" id="dropdown-active-item">
                            <i className="flag-icon flag-icon-gb m-r-5"></i> English
                        </a>
                        <ul className="show-notification">
                            <li>
                                <a href="/#" data-lng="en">
                                    <i className="flag-icon flag-icon-gb m-r-5"></i> English
                                </a>
                            </li>
                            <li>
                                <a href="/#" data-lng="es">
                                    <i className="flag-icon flag-icon-es m-r-5"></i> Spanish
                                </a>
                            </li>
                            <li>
                                <a href="/#" data-lng="pt">
                                    <i className="flag-icon flag-icon-pt m-r-5"></i> Portuguese
                                </a>
                            </li>
                            <li>
                                <a href="/#" data-lng="fr">
                                    <i className="flag-icon flag-icon-fr m-r-5"></i> French
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="header-notification">
                        <a href="#!">
                            <i className="ti-bell"></i>
                            <span className="badge">5</span>
                        </a>
                        <ul className="show-notification">
                            <li>
                                <h6>Notifications</h6>
                                <label className="label label-danger">New</label>
                            </li>
                           
                        </ul>
                    </li>
                    <li className="header-notification">
                        <a href="#!" className="displayChatbox">
                            <i className="ti-comments"></i>
                            <span className="badge">9</span>
                        </a>
                    </li>
                    <li className="user-profile header-notification">
                        <a href="#!">
                            {/* <img src="assets/images/user.png" alt="User-Profile-Image"> */}
                            <span>John Doe</span>
                            <i className="ti-angle-down"></i>
                        </a>
                        <ul className="show-notification profile-notification">
                            <li>
                                <a href="#!">
                                    <i className="ti-settings"></i> Settings
                                </a>
                            </li>
                            <li>
                                <a href="user-profile.html">
                                    <i className="ti-user"></i> Profile
                                </a>
                            </li>
                            <li>
                                <a href="email-inbox.html">
                                    <i className="ti-email"></i> My Messages
                                </a>
                            </li>
                            <li>
                                <a href="auth-lock-screen.html">
                                    <i className="ti-lock"></i> Lock Screen
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="ti-layout-sidebar-left"></i> Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div id="morphsearch" className="morphsearch">
                    <form className="morphsearch-form">
                        <input className="morphsearch-input" type="search" placeholder="Search..." />
                        <button className="morphsearch-submit" type="submit">Search</button>
                    </form>
                    <div className="morphsearch-content">
                        <div className="dummy-column">
                            <h2>People</h2>
                            <a className="dummy-media-object" href="#!">
                                <img className="round" src="http://0.gravatar.com/avatar/81b58502541f9445253f30497e53c280?s=50&amp;d=identicon&amp;r=G" alt="Sara Soueidan" />
                                <h3>Sara Soueidan</h3>
                            </a>
                            <a className="dummy-media-object" href="#!">
                                <img className="round" src="http://1.gravatar.com/avatar/9bc7250110c667cd35c0826059b81b75?s=50&amp;d=identicon&amp;r=G" alt="Shaun Dona" />
                                <h3>Shaun Dona</h3>
                            </a>
                        </div>
                        <div className="dummy-column">
                            <h2>Popular</h2>
                            <a className="dummy-media-object" href="#!">
                                <img src="assets/images/avatar-1.png" alt="PagePreloadingEffect" />
                                <h3>Page Preloading Effect</h3>
                            </a>
                            <a className="dummy-media-object" href="#!">
                                <img src="assets/images/avatar-1.png" alt="DraggableDualViewSlideshow" />
                                <h3>Draggable Dual-View Slideshow</h3>
                            </a>
                        </div>
                        <div className="dummy-column">
                            <h2>Recent</h2>
                            <a className="dummy-media-object" href="#!">
                                <img src="assets/images/avatar-1.png" alt="TooltipStylesInspiration" />
                                <h3>Tooltip Styles Inspiration</h3>
                            </a>
                            <a className="dummy-media-object" href="#!">
                                <img src="assets/images/avatar-1.png" alt="NotificationStyles" />
                                <h3>Notification Styles Inspiration</h3>
                            </a>
                        </div>
                    </div>
                    <span className="morphsearch-close"><i className="icofont icofont-search-alt-1"></i></span>
                </div>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Header