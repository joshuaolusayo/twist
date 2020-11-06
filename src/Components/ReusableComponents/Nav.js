import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ state }) => {
	const [toggle, setToggle] = useState(true);
	const [loaded] = useState(true);


	if (loaded) {
		return (
			<header className="header py-3 bg-black">
				<nav className="navbar navbar-expand-md navbar-dark">
					<Link className="navbar-brand" to="#">
						<img className="logo" src="/images/logo.png" alt="" />
					</Link>
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						data-toggle="collapse"
						data-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span>
							<img
								className="navbar-icon"
								src={`${toggle ? "/images/hamburger.png" : "/images/hamburger-close.png"}`}
								alt="Hamburger"
								onClick={() => {
									setToggle(!toggle);
								}}
							/>
						</span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
						<ul className="navbar-nav mr-0 mt-2 mt-sm-0">
							<li className="nav-item active">
								<Link className="nav-link text-light my-3 my-md-0 mx-md-2 mx-lg-4" to="#">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={`nav-link text-light my-3 my-md-0 mx-md-2 mx-lg-4 ${state === "nav" ? "active" : ""}`}
									to="/work"
								>
									Work
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={`nav-link text-light my-3 my-md-0 mx-md-2 mx-lg-4 ${state === "services" ? "active" : ""}`}
									to="/services"
								>
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-light my-3 my-md-0 mx-md-2 mx-lg-4" to="#">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-light my-3 my-md-0 mx-md-2 mx-lg-4" to="#">
									Blog
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-light my-3 my-md-0 mx-md-2 mx-lg-4" to="#">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
};

export default Nav;
