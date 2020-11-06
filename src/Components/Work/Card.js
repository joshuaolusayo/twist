import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
	return (
		<div className="cards">
			<div className="row py-5 px-3 px-md-5 no-gutters">
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/01.jpg" alt="Card cap" />
							<div className="overlay bg-darkblue px-2 text-light">
								<p>
									<span className="font-weight-bold">Str8bat</span> is a mobile app to track a circketer's batting
									performance
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">Str8bat</h4>
							<p className="card-text">Mobile App</p>
						</div>
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/02.jpg" alt="Card cap" />
							<div className="overlay bg-lightblue px-2 text-light">
								<p>
									<span className="font-weight-bold">Maya</span> is a Saas product for banks to leverage insights from
									credit card transactions.
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">Maya</h4>
							<p className="card-text">Enterprise App</p>
						</div>
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/03.jpg" alt="Card cap" />
							<div className="overlay bg-yellow px-2 text-light">
								<p>
									<span className="font-weight-bold">The Pitch Invasion</span> project is a corporate wesite for the
									sports digital marketing firm.
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">Pitch Invasion</h4>
							<p className="card-text">Corporate Website</p>
						</div>
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/04.png" alt="Card cap" />
						</div>
					</Link>
				</div>
				<div className="col-md-8 col-lg-6 mb-4 mb-md-5 px-sm-3">
					<div className="card border-0">
						<div className="picture px-md-4">
							<img className="card-img-top card-img img-fluid" src="/images/work/cards/02.png" alt="Card cap" />
						</div>
						<div className="card-body p-0 text-black text-center">
							<h4 className="card-title font-weight-bold mb-0 mt-2">What makes great Mobile App UX</h4>
							<Link className="card-text text-danger" to="#">
								Find out
							</Link>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/05.jpg" alt="Card cap" />
							<div className="overlay bg-darkbrown px-2 text-light">
								<p>
									<span className="font-weight-bold">Scoryboard</span> is a web product that reports real time cricket
									match scores.
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">Scoryboard</h4>
							<p className="card-text">Web Product</p>
						</div>
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/06.jpg" alt="Card cap" />
							<div className="overlay bg-lightblue px-2 text-light">
								<p>
									The<span className="font-weight-bold">marketsN</span> corporate website is a showcase for the marketsN
									product.
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">marketsN</h4>
							<p className="card-text">Corporate Website</p>
						</div>
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/07.jpg" alt="Card cap" />
							<div className="overlay bg-brown px-2 text-light">
								<p>
									The<span className="font-weight-bold">Core Project</span> design allows educators to conceptualize and
									deliver the economics curriculum.
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">The Economy</h4>
							<p className="card-text">Digital eBook</p>
						</div>
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/08.jpg" alt="Card cap" />
							<div className="overlay bg-blue px-2 text-light">
								<p>
									Table App design for installation of wireless lighting with{" "}
									<span className="font-weight-bold">JouleiQ</span>
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">JouleiQ</h4>
							<p className="card-text">Enterprise App</p>
						</div>
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/09.jpg" alt="Card cap" />
							<div className="overlay bg-green px-2 text-light">
								<p>
									The <span className="font-weight-bold">Immersion UX</span> project is a corporate website for the South
									African UX consultancy.
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">Immersion UX</h4>
							<p className="card-text">Corporate Website</p>
						</div>
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/10.jpg" alt="Card cap" />
							<div className="overlay bg-orange px-2 text-light">
								<p>
									Communication strategy for <span className="font-weight-bold">Ferroli</span> to launch their products in
									the Indian market.
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">Ferroli</h4>
							<p className="card-text">Corporate Website</p>
						</div>
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/11.jpg" alt="Card cap" />
							<div className="overlay bg-sec px-2 text-light">
								<p>
									Communication strategy for <span className="font-weight-bold">Gram Vikas</span> to target new-age
									donors.
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">Gram Vikas</h4>
							<p className="card-text">NGO Website</p>
						</div>
					</Link>
				</div>
				<div className="col-md-8 col-lg-6 mb-4 mb-md-5 px-sm-3">
					<div className="card border-0">
						<div className="picture px-md-4">
							<img className="card-img-top card-img img-fluid" src="/images/work/cards/12.png" alt="Card cap" />
						</div>
						<div className="card-body p-0 text-black text-center">
							<h4 className="card-title font-weight-bold mb-0 mt-2">What makes great Mobile App UX</h4>
							<Link className="card-text text-danger" to="#">
								Find out
							</Link>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/13.jpg" alt="Card cap" />
							<div className="overlay bg-lightcol px-2 text-light">
								<p>
									<span className="font-weight-bold">Fertility Tracker</span> is a mobile application designed to help a
									couple plan and conceive a baby.
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">IZiel Healthcare</h4>
							<p className="card-text">Mobile App</p>
						</div>
					</Link>
				</div>
				<div className="col-md-8 col-lg-6 mb-4 mb-md-5 px-sm-3">
					<div className="card border-0">
						<div className="picture px-md-4">
							<img className="card-img-top card-img img-fluid" src="/images/work/cards/14.png" alt="Card cap" />
						</div>
						<div className="card-body p-0 text-black text-center">
							<h4 className="card-title font-weight-bold mb-0 mt-2">What makes great Mobile App UX</h4>
							<Link className="card-text text-danger" to="#">
								Find out
							</Link>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/15.jpg" alt="Card cap" />
							<div className="overlay bg-darkcol px-2 text-light">
								<p>
									<span className="font-weight-bold">marketsN</span> is an enterprise app that integrates BlockChain
									Technology with supply chains.
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">marketsN</h4>
							<p className="card-text">Enterprise App</p>
						</div>
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/16.jpg" alt="Card cap" />
							<div className="overlay bg-faintcol px-2 text-light">
								<p>
									The <span className="font-weight-bold">Koinearth</span> corporate website is a marketing channel for the
									Blockchain Solutions Company.
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">Koinearth</h4>
							<p className="card-text">Corporate Website</p>
						</div>
					</Link>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<Link to="/work" className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/17.jpg" alt="Card cap" />
							<div className="overlay bg-darkblue px-2 text-light">
								<p>
									The <span className="font-weight-bold">Core Econ</span> website is designed to promote the digital
									economics curriculum and share learning outcomes.
								</p>
							</div>
						</div>
						<div className="card-body p-0 text-black">
							<h4 className="card-title font-weight-bold mb-0 mt-2">The CORE Project</h4>
							<p className="card-text">Promotional Website</p>
						</div>
					</Link>
				</div>
				<div className="col-md-8 col-lg-6 mb-4 mb-md-5 px-sm-3 d-flex align-items-center">
					<div className="card w-100 border-0">
						<div className="picture px-md-4">
							<h4 className="text-bg text-center font-weight-bold">
								Dying to see more? <br />
								Give us a shout!
							</h4>
						</div>
						<div className="card-body p-0 text-black text-center">
							<form action="#">
								<input
									type="text"
									className="border my-2 p-2 p-md-4 form-control"
									placeholder="Enter your email address"
									required
								/>
								<button className="card-text text-danger btn p-0 btn-submit">Shout</button>
							</form>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-3 mb-4 mb-md-5 px-sm-3">
					<div className="card border-0">
						<div className="picture">
							<img className="card-img-top card-img" src="/images/work/cards/18.png" alt="Card cap" />
						</div>
						<div className="card-body p-0 text-black text-center">
							<h4 className="card-title font-weight-bold mb-0 mt-2">How communication comes alive on a website</h4>
							<Link to="/work" className="text-pry">
								Find out
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
