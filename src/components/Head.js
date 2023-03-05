import React from 'react'

function Head() {
  return (
    <>  
    <nav className="navbar header-navbar pcoded-header iscollapsed" header-theme="theme4">
                <div className="navbar-wrapper">
                    <div className="navbar-logo">
                        <a className="mobile-menu" id="mobile-collapse" href="#!">
                            <i className="ti-menu"></i>
                        </a>
                        <a className="mobile-search morphsearch-search" href="#!">
                            <i className="ti-search"></i>
                        </a>
                        <a href="index-2.html">
                            <img className="img-fluid" src={process.env.PUBLIC_URL + 'adminkit/assets/images/logo.png'} alt="Theme-Logo" />
                        </a> 
                        <a  href="#!"className="mobile-options">
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
                                    <a className="main-search morphsearch-search" href="#!">
                                        <i className="ti-search"></i>
                                    </a>
                                </li>
                                <li>
                                
                                    <a href="javascript:toggleFullScreen()">
                                        <i className="ti-fullscreen"></i>
                                    </a>
                                </li>
                                <li className="mega-menu-top">
                                    <a href="#!">
                                        Mega
                                        <i className="ti-angle-down"></i>
                                    </a>
                                    <ul className="show-notification row">
                                        <li className="col-sm-3">
                                            <h6 className="mega-menu-title">Popular Links</h6>
                                            <ul className="mega-menu-links">
                                                <li><a href="form-elements-component.html">Form Elements</a></li>
                                                <li><a href="button.html">Buttons</a></li>
                                                <li><a href="map-google.html">Maps</a></li>
                                                <li><a href="user-card.html">Contact Cards</a></li>
                                                <li><a href="user-profile.html">User Information</a></li>
                                                <li><a href="auth-lock-screen.html">Lock Screen</a></li>
                                            </ul>
                                        </li>
                                        <li className="col-sm-3">
                                            <h6 className="mega-menu-title">Mailbox</h6>
                                            <ul className="mega-mailbox">
                                                <li>
                                                    <a href="#!" className="media">
                                                        <div className="media-left">
                                                            <i className="ti-folder"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>Data Backup</h5>
                                                            <small className="text-muted">Store your data</small>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!" className="media">
                                                        <div className="media-left">
                                                            <i className="ti-headphone-alt"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>Support</h5>
                                                            <small className="text-muted">24-hour support</small>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!" className="media">
                                                        <div className="media-left">
                                                            <i className="ti-dropbox"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>Drop-box</h5>
                                                            <small className="text-muted">Store large amount of data in one-box only
                                                            </small>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!" className="media">
                                                        <div className="media-left">
                                                            <i className="ti-location-pin"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>Location</h5>
                                                            <small className="text-muted">Find Your Location with ease of use</small>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="col-sm-3">
                                            <h6 className="mega-menu-title">Gallery</h6>
                                            <div className="row m-b-20">
                                                <div className="col-sm-4"><img className="img-fluid img-thumbnail" src="assets/images/mega-menu/01.jpg" alt="Gallery-1"/>
                                                </div>
                                                <div className="col-sm-4"><img className="img-fluid img-thumbnail" src="assets/images/mega-menu/02.jpg" alt="Gallery-2"/>
                                                </div>
                                                <div className="col-sm-4"><img className="img-fluid img-thumbnail" src="assets/images/mega-menu/03.jpg" alt="Gallery-3"/>
                                                </div>
                                            </div>
                                            <div className="row m-b-20">
                                                <div className="col-sm-4"><img className="img-fluid img-thumbnail" src="assets/images/mega-menu/04.jpg" alt="Gallery-4"/>
                                                </div>
                                                <div className="col-sm-4"><img className="img-fluid img-thumbnail" src="assets/images/mega-menu/05.jpg" alt="Gallery-5"/>
                                                </div>
                                                <div className="col-sm-4"><img className="img-fluid img-thumbnail" src="assets/images/mega-menu/06.jpg" alt="Gallery-6"/>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-sm btn-block">Browse Gallery</button>
                                        </li>
                                        <li className="col-sm-3">
                                            <h6 className="mega-menu-title">Contact Us</h6>
                                            <div className="mega-menu-contact">
                                                <div className="form-group row">
                                                    {/* <label for="example-text-input" className="col-3 col-form-label">Name</label> */}
                                                    <div className="col-9">
                                                        <input className="form-control" type="text" placeholder="Artisanal kale" id="example-text-input"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    {/* <label for="example-search-input" className="col-3 col-form-label">Email</label> */}
                                                    <div className="col-9">
                                                        <input className="form-control" type="email" placeholder="Enter your E-mail Id" id="example-search-input"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    {/* <label for="example-search-input" className="col-3 col-form-label">Contact</label> */}
                                                    <div className="col-9">
                                                        <input className="form-control" type="number" placeholder="+91-9898989898" id="example-search-input"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    {/* <label for="exampleTextarea" className="col-3 col-form-label">Message</label> */}
                                                    <div className="col-9">
                                                        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav-right">
                                <li className="header-notification lng-dropdown">
                                    <a href="#!" id="dropdown-active-item">
                                        <i className="flag-icon flag-icon-gb m-r-5"></i> English
                                    </a>
                                    <ul className="show-notification">
                                        <li>
                                            <a href="#!" data-lng="en">
                                                <i className="flag-icon flag-icon-gb m-r-5"></i> English
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" data-lng="es">
                                                <i className="flag-icon flag-icon-es m-r-5"></i> Spanish
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" data-lng="pt">
                                                <i className="flag-icon flag-icon-pt m-r-5"></i> Portuguese
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" data-lng="fr">
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
                                        <li>
                                            <div className="media">
                                                <img className="d-flex align-self-center" src={process.env.PUBLIC_URL + 'adminkit/assets/images/user.png'} alt="Generic placeholder image"/>
                                                <div className="media-body">
                                                    <h5 className="notification-user">John Doe</h5>
                                                    <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                    <span className="notification-time">30 minutes ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img className="d-flex align-self-center" src={process.env.PUBLIC_URL + 'adminkit/assets/images/user.png'} alt="Generic placeholder image"/>
                                                <div className="media-body">
                                                    <h5 className="notification-user">Joseph William</h5>
                                                    <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                    <span className="notification-time">30 minutes ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img className="d-flex align-self-center" src="assets/images/user.png" alt="Generic placeholder image"/>
                                                <div className="media-body">
                                                    <h5 className="notification-user">Sara Soudein</h5>
                                                    <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                    <span className="notification-time">30 minutes ago</span>
                                                </div>
                                            </div>
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
                                        <img src={process.env.PUBLIC_URL + 'adminkit/assets/images/user.png'} alt="User-Profile-Image"/>
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
                            {/* <!-- search --> */}
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
                                {/* <!-- /morphsearch-content --> */}
                                <span className="morphsearch-close"><i className="icofont icofont-search-alt-1"></i></span>
                            </div>
                            {/* <!-- search end --> */}
                        </div>
                    </div>
                </div>
            </nav>

            {/* <!-- Sidebar chat start --> */}
        <div id="sidebar" class="users p-chat-user showChat">
            <div class="had-container">
                <div class="card card_main p-fixed users-main">
                    <div class="user-box">
                        <div class="card-block">
                            <div class="right-icon-control">
                                <input type="text" class="form-control  search-text" placeholder="Search Friend" id="search-friends"/>
                                <div class="form-icon">
                                    <i class="icofont icofont-search"></i>
                                </div>
                            </div>
                        </div>
                        <div class="main-friend-list">
                            <div class="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/avatar-1.png" alt="Generic placeholder image"/>
                                    <div class="live-status bg-success"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Josephin Doe</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe" data-toggle="tooltip" data-placement="left" title="Lary Doe">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/task/task-u1.jpg" alt="Generic placeholder image"/>
                                    <div class="live-status bg-success"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Lary Doe</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="3" data-status="online" data-username="Alice" data-toggle="tooltip" data-placement="left" title="Alice">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/avatar-2.png" alt="Generic placeholder image"/>
                                    <div class="live-status bg-success"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Alice</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="4" data-status="online" data-username="Alia" data-toggle="tooltip" data-placement="left" title="Alia">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/task/task-u2.jpg" alt="Generic placeholder image"/>
                                    <div class="live-status bg-success"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Alia</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="5" data-status="online" data-username="Suzen" data-toggle="tooltip" data-placement="left" title="Suzen">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/task/task-u3.jpg" alt="Generic placeholder image"/>
                                    <div class="live-status bg-success"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Suzen</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="6" data-status="offline" data-username="Michael Scofield" data-toggle="tooltip" data-placement="left" title="Michael Scofield">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/avatar-3.png" alt="Generic placeholder image"/>
                                    <div class="live-status bg-danger"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Michael Scofield</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="7" data-status="online" data-username="Irina Shayk" data-toggle="tooltip" data-placement="left" title="Irina Shayk">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/avatar-4.png" alt="Generic placeholder image"/>
                                    <div class="live-status bg-success"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Irina Shayk</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="8" data-status="offline" data-username="Sara Tancredi" data-toggle="tooltip" data-placement="left" title="Sara Tancredi">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/avatar-5.png" alt="Generic placeholder image"/>
                                    <div class="live-status bg-danger"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Sara Tancredi</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="9" data-status="online" data-username="Samon" data-toggle="tooltip" data-placement="left" title="Samon">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/avatar-1.png" alt="Generic placeholder image"/>
                                    <div class="live-status bg-success"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Samon</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="10" data-status="online" data-username="Daizy Mendize" data-toggle="tooltip" data-placement="left" title="Daizy Mendize">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/task/task-u3.jpg" alt="Generic placeholder image"/>
                                    <div class="live-status bg-success"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Daizy Mendize</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="11" data-status="offline" data-username="Loren Scofield" data-toggle="tooltip" data-placement="left" title="Loren Scofield">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/avatar-3.png" alt="Generic placeholder image"/>
                                    <div class="live-status bg-danger"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Loren Scofield</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="12" data-status="online" data-username="Shayk" data-toggle="tooltip" data-placement="left" title="Shayk">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/avatar-4.png" alt="Generic placeholder image"/>
                                    <div class="live-status bg-success"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Shayk</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="13" data-status="offline" data-username="Sara" data-toggle="tooltip" data-placement="left" title="Sara">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/task/task-u3.jpg" alt="Generic placeholder image"/>
                                    <div class="live-status bg-danger"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Sara</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="14" data-status="online" data-username="Doe" data-toggle="tooltip" data-placement="left" title="Doe">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/avatar-1.png" alt="Generic placeholder image"/>
                                    <div class="live-status bg-success"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Doe</div>
                                </div>
                            </div>
                            <div class="media userlist-box" data-id="15" data-status="online" data-username="Lary" data-toggle="tooltip" data-placement="left" title="Lary">
                                <a class="media-left" href="#!">
                                    <img class="media-object img-circle" src="assets/images/task/task-u1.jpg" alt="Generic placeholder image"/>
                                    <div class="live-status bg-success"></div>
                                </a>
                                <div class="media-body">
                                    <div class="f-13 chat-header">Lary</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Head