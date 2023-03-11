import React from 'react'
import Horizontal from '../components/Horizontal'
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <Horizontal>

            <>
            <div class="row">
			{/* <!-- [ basic-carousel ] start --> */}
			<div class="col-sm-12">
				<div class="card">
					<div class="card-header">
						<h5>BIENVENUE A DIGI CONTRACT</h5>
					</div>
					<div class="card-body">
						<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img class="img-fluid d-block w-100" src={process.env.PUBLIC_URL + 'adminfile/images/slider/img-slide-1.jpg'} alt="First slide"/>
								</div>
								<div class="carousel-item">
									<img class="img-fluid d-block w-100" src={process.env.PUBLIC_URL + 'adminfile/images/slider/img-slide-2.jpg'} alt="Second slide"/>
								</div>
								<div class="carousel-item">
									<img class="img-fluid d-block w-100" src={process.env.PUBLIC_URL + 'adminfile/images/slider/img-slide-3.jpg'} alt="Third slide"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	

		</div>

      <div class="col-xl-12">
				<h5 class="mt-4">LISTE DES ARTICLES</h5>
				<hr/>
				<div class="card-deck">
					<div class="card">
						<img class="img-fluid card-img-top" src={process.env.PUBLIC_URL + 'adminfile/images/slider/img-slide-2.jpg'} alt="Card image cap"/>
						<div class="card-body"> 
							<h5 class="card-title">Comment créer une entreprise</h5>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated 3 mins ago</small>
                            <Link to="/formu" className="nav-link ">
                            <button type="button" class="btn  btn-primary ml-2">Consulter</button>
                            </Link>

						</div>
                       
					</div>
					<div class="card">
						<img class="img-fluid card-img-top" src={process.env.PUBLIC_URL + 'adminfile/images/slider/img-slide-1.jpg'} alt="Card image cap"/>
						<div class="card-body">
							<h5 class="card-title">Tout savoir sur le CDD</h5>
							<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated 3 mins ago</small>
                            <button type="button" class="btn  btn-primary ml-2">Consulter</button>
						</div>
					</div>
					<div class="card">
						<img class="img-fluid card-img-top" src={process.env.PUBLIC_URL + 'adminfile/images/slider/img-slide-4.jpg'} alt="Card image cap"/>
						<div class="card-body">
							<h5 class="card-title">Comment obtenir son contrat</h5>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated 3 mins ago</small>
                            <button type="button" class="btn  btn-primary ml-2">Consulter</button>
						</div>
					</div>
				</div>
			</div>
   

            </>

        </Horizontal>

    )
}

export default LandingPage