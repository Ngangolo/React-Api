import React from 'react'
import Sidebar from './Sidebar'
import { Link } from "react-router-dom";
// import Header from './Header'

function Horizontal({ children }) {
    return (
        <>
                <header className="navbar pcoded-header navbar-expand-lg navbar-light header-dark">


                    <div className="m-header">
                        <a className="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
                        <a href="#!" class="b-brand">
                {/* <!-- ========   change your logo hear   ============ --> */}
                <img src={process.env.PUBLIC_URL + 'adminfile/images/logo.png'} alt="" className="logo"/>
                <img src="assets/images/logo-icon.png" alt="" className="logo-thumb"/>
            </a>
                        <a href="#!" className="mob-toggler">
                            <i className="feather icon-more-vertical"></i>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item">
                                <div className="dropdown">
                                    <a className="dropdown-toggle h-drop" href="/#" data-toggle="dropdown">
                                        Category
                                    </a>
                                    <div className="dropdown-menu profile-notification ">
                                        <ul className="pro-body">
                                            <li><a href="user-profile.html" className="dropdown-item"><i className="fas fa-circle"></i> Profile</a></li>
                                            <li><a href="email_inbox.html" className="dropdown-item"><i className="fas fa-circle"></i> My Messages</a></li>
                                            <li><a href="auth-signin.html" className="dropdown-item"><i className="fas fa-circle"></i> Lock Screen</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown mega-menu">
                                    <a className="dropdown-toggle h-drop" href="/#" data-toggle="dropdown">
                                        Creation d'entreprise
                                    </a>
                                    <div className="dropdown-menu profile-notification ">
                                        <div className="row no-gutters">
                                            <div className="col">
                                                <h6 className="mega-title">CREER MON ENTREPRISE</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Création d'une SASU</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>  Création d'une SAS</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>  Création d'une SARL</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>  Création d'une EURL</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>  Création d'une SCI</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>  Création d'une mico-entreprise</a></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h6 className="mega-title">PROTEGER MA MARQUE</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Deposer ma marque</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Rechercher anteriorité</a></li>

                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h6 className="mega-title">LIRE LES TOPS ARTICLES</h6>
                                                <ul className="pro-body">
                                                    
                                                    <li> <Link to="/formu" className="nav-link "> <i className="feather icon-file-plus"></i> Comment choisir sa forme juridique ?</Link></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-file-minus"></i> Ouvrir son entreprise : comment faire ?</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-calendar"></i> Comment créer une SASU ?</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-upload-cloud"></i>Les avantages du statut SAS</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-scissors"></i>Tout savoir sur l'EURL</a></li>
                                                    <li> <Link to="/formu" className="nav-link "><i className="feather icon-scissors"></i>Tout savoir sur le CDD</Link></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-scissors"></i>SAS ou SARL : le comparatif</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-scissors"></i>Les avantages de la SARL</a></li>

                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h6 className="mega-title">BIEN D'EBTOURER</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-mail"></i> Nos avantages partenaires pour la création</a></li>
                                                    
                                                </ul>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown mega-menu">
                                    <a className="dropdown-toggle h-drop" href="/#" data-toggle="dropdown">
                                        Gestion d'entreprise
                                    </a>
                                    <div className="dropdown-menu profile-notification ">
                                        <div className="row no-gutters">
                                            <div className="col">
                                                <h6 className="mega-title">UI Element</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Alert</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Button</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Badges</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Cards</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Modal</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Tabs & pills</a></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h6 className="mega-title">Forms</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Elements</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Validation</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Masking</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Wizard</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Picker</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Select</a></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h6 className="mega-title">Application</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-mail"></i> Email</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-clipboard"></i> Task</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-check-square"></i> To-Do</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-image"></i> Gallery</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-help-circle"></i> Helpdesk</a></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h6 className="mega-title">Extension</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-file-plus"></i> Editor</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-file-minus"></i> Invoice</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-calendar"></i> Full calendar</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-upload-cloud"></i> File upload</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-scissors"></i> Image cropper</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown mega-menu">
                                    <a className="dropdown-toggle h-drop" href="/#" data-toggle="dropdown">
                                        Redaction de contrat
                                    </a>
                                    <div className="dropdown-menu profile-notification ">
                                        <div className="row no-gutters">
                                            <div className="col">
                                                <h6 className="mega-title">UI Element</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Alert</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Button</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Badges</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Cards</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Modal</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Tabs & pills</a></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h6 className="mega-title">Forms</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Elements</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Validation</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Masking</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Wizard</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Picker</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Select</a></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h6 className="mega-title">Application</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-mail"></i> Email</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-clipboard"></i> Task</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-check-square"></i> To-Do</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-image"></i> Gallery</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-help-circle"></i> Helpdesk</a></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h6 className="mega-title">Extension</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-file-plus"></i> Editor</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-file-minus"></i> Invoice</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-calendar"></i> Full calendar</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-upload-cloud"></i> File upload</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-scissors"></i> Image cropper</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown mega-menu">
                                    <a className="dropdown-toggle h-drop" href="/#" data-toggle="dropdown">
                                        Accompagnement juridique
                                    </a>
                                    <div className="dropdown-menu profile-notification ">
                                        <div className="row no-gutters">
                                            <div className="col">
                                                <h6 className="mega-title">UI Element</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Alert</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Button</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Badges</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Cards</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Modal</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i> Tabs & pills</a></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h6 className="mega-title">Forms</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Elements</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Validation</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Masking</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Wizard</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Picker</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Select</a></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h6 className="mega-title">Application</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-mail"></i> Email</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-clipboard"></i> Task</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-check-square"></i> To-Do</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-image"></i> Gallery</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-help-circle"></i> Helpdesk</a></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h6 className="mega-title">Extension</h6>
                                                <ul className="pro-body">
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-file-plus"></i> Editor</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-file-minus"></i> Invoice</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-calendar"></i> Full calendar</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-upload-cloud"></i> File upload</a></li>
                                                    <li><a href="#!" className="dropdown-item"><i className="feather icon-scissors"></i> Image cropper</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <div className="dropdown">
                                    <a className="dropdown-toggle" href="/#" data-toggle="dropdown">
                                        <i className="icon feather icon-bell"></i>
                                        <span className="badge badge-pill badge-danger">5</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right notification">
                                        <div className="noti-head">
                                            <h6 className="d-inline-block m-b-0">Notifications</h6>
                                            <div className="float-right">
                                                <a href="#!" className="m-r-10">mark as read</a>
                                                <a href="#!">clear all</a>
                                            </div>
                                        </div>
                                        <ul className="noti-body">
                                            <li className="n-title">
                                                <p className="m-b-0">NEW</p>
                                            </li>
                                            <li className="notification">
                                                <div className="media">
                                                    <img className="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
                                                    <div className="media-body">
                                                        <p><strong>John Doe</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>5 min</span></p>
                                                        <p>New ticket Added</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="n-title">
                                                <p className="m-b-0">EARLIER</p>
                                            </li>
                                            <li className="notification">
                                                <div className="media">
                                                    <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
                                                    <div className="media-body">
                                                        <p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>10 min</span></p>
                                                        <p>Prchace New Theme and make payment</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="notification">
                                                <div className="media">
                                                    <img className="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
                                                    <div className="media-body">
                                                        <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>12 min</span></p>
                                                        <p>currently login</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="notification">
                                                <div className="media">
                                                    <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
                                                    <div className="media-body">
                                                        <p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                        <p>Prchace New Theme and make payment</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="noti-footer">
                                            <a href="#!">show all</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown drp-user">
                                    <a href="/#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="feather icon-user"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right profile-notification">
                                        <div className="pro-head">
                                            <img src="assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image" />
                                            <span>John Doe</span>
                                            <a href="auth-signin.html" className="dud-logout" title="Logout">
                                                <i className="feather icon-log-out"></i>
                                            </a>
                                        </div>
                                        <ul className="pro-body">
                                            <li><a href="user-profile.html" className="dropdown-item"><i className="feather icon-user"></i> Profile</a></li>
                                            <li><a href="email_inbox.html" className="dropdown-item"><i className="feather icon-mail"></i> My Messages</a></li>
                                            <li><a href="auth-signin.html" className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </header>
                <div className="m-2">
                    {children}
                </div>
           
        </>
    )
}

export default Horizontal