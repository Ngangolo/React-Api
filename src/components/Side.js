import React from 'react'

function Side() {
  return (
    <>
    <nav className="pcoded-navbar" pcoded-header-position="relative">
              <div className="sidebar_toggle"><a href="#!"><i className="icon-close icons"></i></a></div>
              <div className="pcoded-inner-navbar main-menu">
                  <div className="">
                      <div className="main-menu-header">
                          <img className="img-40" src={process.env.PUBLIC_URL + 'adminkit/assets/images/user.png'} alt="User-Profile-Image"/>
                          <div className="user-details">
                              <span>John Doe</span>
                              <span id="more-details">UX Designer<i className="ti-angle-down"></i></span>
                          </div>
                      </div>

                      <div className="main-menu-content">
                          <ul>
                              <li className="more-details">
                                  <a href="user-profile.html"><i className="ti-user"></i>View Profile</a>
                                  <a href="#!"><i className="ti-settings"></i>Settings</a>
                                  <a href="#!"><i className="ti-layout-sidebar-left"></i>Logout</a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="pcoded-navigatio-lavel" data-i18n="nav.category.navigation" menu-title-theme="theme5" >Navigation</div>
                  
                  <ul className="pcoded-item pcoded-left-item">  
                      <li className="pcoded-hasmenu">
                          <a  href="javascript:void(0)">
                              <span className="pcoded-micon"><i className="ti-home"></i></span>
                              <span className="pcoded-mtext" data-i18n="nav.dash.main">Dashboard</span>
                              <span className="pcoded-mcaret"></span>
                          </a>
                          <ul className="pcoded-submenu">
                              <li className="">
                                  <a href="index-2.html">
                                      <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                      <span className="pcoded-mtext" data-i18n="nav.dash.default">Default</span>
                                      <span className="pcoded-mcaret"></span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="dashboard-ecommerce.html">
                                      <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                      <span className="pcoded-mtext" data-i18n="nav.dash.ecommerce">Ecommerce</span>
                                      <span className="pcoded-mcaret"></span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="dashboard-crm.html">
                                      <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                      <span className="pcoded-mtext" data-i18n="nav.dash.crm">CRM</span>
                                      <span className="pcoded-mcaret"></span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="dashboard-analytics.html">
                                      <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                      <span className="pcoded-mtext" data-i18n="nav.dash.analytics">Analytics</span>
                                      <span className="pcoded-badge label label-info ">NEW</span>
                                      <span className="pcoded-mcaret"></span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="dashboard-project.html">
                                      <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                      <span className="pcoded-mtext" data-i18n="nav.dash.project">Project</span>
                                      <span className="pcoded-mcaret"></span>
                                  </a>
                              </li>
                          </ul>
                      </li>
                      <li className="pcoded-hasmenu">
                          <a href="">
                              <span className="pcoded-micon"><i className="ti-layout"></i></span>
                              <span className="pcoded-mtext" data-i18n="nav.page_layout.main">Page layouts</span>
                              <span className="pcoded-badge label label-warning">NEW</span>
                              <span className="pcoded-mcaret"></span>
                          </a>
                          <ul className="pcoded-submenu">

                              <li className=" pcoded-hasmenu">
                                  <a href="" >
                                      <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                                      <span className="pcoded-mtext">Vertical</span>
                                      <span className="pcoded-mcaret"></span>
                                  </a>
                                  <ul className="pcoded-submenu">
                                      <li className=" ">
                                          <a href="menu-static.html" data-i18n="nav.page_layout.vertical.static-layout">
                                              <span className="pcoded-micon"><i className="icon-chart"></i></span>
                                              <span className="pcoded-mtext">Static Layout</span>
                                              <span className="pcoded-mcaret"></span>
                                          </a>
                                      </li>
                                      <li className=" ">
                                          <a href="menu-header-fixed.html" data-i18n="nav.page_layout.vertical.header-fixed">
                                              <span className="pcoded-micon"><i className="icon-chart"></i></span>
                                              <span className="pcoded-mtext">Header Fixed</span>
                                              <span className="pcoded-mcaret"></span>
                                          </a>
                                      </li>
                                      <li className=" ">
                                          <a href="menu-compact.html" data-i18n="nav.page_layout.vertical.compact">
                                              <span className="pcoded-micon"><i className="icon-chart"></i></span>
                                              <span className="pcoded-mtext">Compact</span>
                                              <span className="pcoded-mcaret"></span>
                                          </a>
                                      </li>
                                      <li className=" ">
                                          <a href="menu-sidebar.html" data-i18n="nav.page_layout.vertical.sidebar-fixed">
                                              <span className="pcoded-micon"><i className="icon-chart"></i></span>
                                              <span className="pcoded-mtext">Sidebar Fixed</span>
                                              <span className="pcoded-mcaret"></span>
                                          </a>
                                      </li>

                                  </ul>
                              </li>
                              <li className=" pcoded-hasmenu">
                                  <a href="" data-i18n="nav.page_layout.horizontal.main">
                                      <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                                      <span className="pcoded-mtext">Horizontal</span>
                                      <span className="pcoded-mcaret"></span>
                                  </a>
                                  <ul className="pcoded-submenu">
                                      <li className=" ">
                                          <a href="menu-horizontal-static.html" target="_blank" data-i18n="nav.page_layout.horizontal.static-layout">
                                              <span className="pcoded-micon"><i className="icon-chart"></i></span>
                                              <span className="pcoded-mtext">Static Layout</span>
                                              <span className="pcoded-mcaret"></span>
                                          </a>
                                      </li>
                                      <li className=" ">
                                          <a href="menu-horizontal-fixed.html" target="_blank" data-i18n="nav.page_layout.horizontal.fixed-layout">
                                              <span className="pcoded-micon"><i className="icon-chart"></i></span>
                                              <span className="pcoded-mtext">Fixed layout</span>
                                              <span className="pcoded-mcaret"></span>
                                          </a>
                                      </li>
                                      <li className=" ">
                                          <a href="menu-horizontal-icon.html" target="_blank" data-i18n="nav.page_layout.horizontal.static-with-icon">
                                              <span className="pcoded-micon"><i className="icon-chart"></i></span>
                                              <span className="pcoded-mtext">Static With Icon</span>
                                              <span className="pcoded-mcaret"></span>
                                          </a>
                                      </li>
                                      <li className=" ">
                                          <a href="menu-horizontal-icon-fixed.html" target="_blank" data-i18n="nav.page_layout.horizontal.fixed-with-icon">
                                              <span className="pcoded-micon"><i className="icon-chart"></i></span>
                                              <span className="pcoded-mtext">Fixed With Icon</span>
                                              <span className="pcoded-mcaret"></span>
                                          </a>
                                      </li>
                                  </ul>
                              </li>
                              <li className=" ">
                                  <a href="menu-bottom.html" data-i18n="nav.page_layout.bottom-menu">
                                      <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                                      <span className="pcoded-mtext">Bottom Menu</span>
                                      <span className="pcoded-mcaret"></span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="box-layout.html" target="_blank" data-i18n="nav.page_layout.box-layout">
                                      <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                                      <span className="pcoded-mtext">Box Layout</span>
                                      <span className="pcoded-mcaret"></span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="menu-rtl.html" target="_blank" data-i18n="nav.page_layout.rtl">
                                      <span className="pcoded-micon"><i className="icon-pie-chart"></i></span>
                                      <span className="pcoded-mtext">RTL</span>
                                      <span className="pcoded-mcaret"></span>
                                  </a>
                              </li>

                          </ul>
                      </li>
                      <li className="pcoded-hasmenu">
                          <a href="" data-i18n="nav.navigate.main">
                              <span className="pcoded-micon"><i className="ti-layout-cta-right"></i></span>
                              <span className="pcoded-mtext">Navigation</span>
                              <span className="pcoded-mcaret"></span>
                          </a>
                        
                      </li>
                      <li className=" ">
                          <a href="widget.html" data-i18n="nav.widget.main">

                          <span className="pcoded-micon"><i className="ti-view-grid"></i></span>
                              <span className="pcoded-mtext">Widget</span>
                              <span className="pcoded-badge label label-danger">100+</span>
                              <span className="pcoded-mcaret"></span>
                          </a>
                      </li>
                  </ul>                 
               
              </div>
          </nav>

</>
  )
}

export default Side