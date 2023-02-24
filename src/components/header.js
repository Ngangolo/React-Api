import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();

 const logoutAction = () => {
        axios.post('/api/auth/logout',{}, { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then((r) => {
            localStorage.setItem('token', "")
           navigate("/");
        })
        .catch((e) => {
            console.log(e)
        });
    }

	return (
		<>
			<div className="loader-bg">
				<div className="loader-track">
					<div className="loader-fill"></div>
				</div>
			</div>

			<nav className="pcoded-navbar  ">
				<div className="navbar-wrapper  ">
					<div className="navbar-content scroll-div " >

						<div className="">
							<div className="main-menu-header">
								{/* <img className="img-radius" src="assets/images/user/avatar-2.jpg" /> */}
								<div className="user-details">
									<span>KONE</span>
									<div id="more-details">N'gangolo<i className="fa fa-chevron-down m-l-5"></i></div>
								</div>
							</div>
						</div>

						<ul className="nav pcoded-inner-navbar ">
							<li className="nav-item">
								<Link to="/dashboard" className="nav-link ">
									<span className="pcoded-micon"><i className="feather icon-home"></i>
									</span>
									<span className="pcoded-mtext">
										Dashboard</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/formu" className="nav-link ">
									<span className="pcoded-micon">
										<i className="feather icon-home"></i>
									</span>
									<span className="pcoded-mtext">
										creer une entreprise

									</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/showDocument" className="nav-link ">
									<span className="pcoded-micon">
										<i className="feather icon-home"></i>
									</span>
									<span className="pcoded-mtext">
										Mes Documents
									</span>
								</Link>
							</li>
							<li className="nav-item">
								<a href="index.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Mes Commandes</span></a>
							</li>

							<li className="nav-item">
								<a href="chart-apex.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-pie-chart"></i></span><span className="pcoded-mtext">Mes Rapport</span></a>
							</li>
							<li className="nav-item">
								<Link onClick={()=>logoutAction()} className="nav-link ">
									<span className="pcoded-micon">
										<i className="feather icon-map"></i>
									</span><span className="pcoded-mtext">
										Deconnexion
									</span>
								</Link>
							</li>

						</ul>

					</div>
				</div>
			</nav>
		</>
	)
}

export default Header