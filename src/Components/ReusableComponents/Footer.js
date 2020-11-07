import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ state }) => {
	return (
		<div className="footer container-fluid bg-black py-8 px-5">
			<div className="row justify-content-between">
				<div className="col-md-4 mt-5 mt-md-n3 d-flex flex-column justify-content-between align-items-between">
					<Link className="d-block mx-auto" to="#">
						<img className="img-fluid" src="/images/logo.png" loading="lazy" alt="Logo" />
					</Link>
					<div className="social-links d-flex justify-content-between pt-4 pt-md-0 col-sm-8 col-md-auto mx-auto w-100">
						<img src="/images/icons/linkedin.png" alt="LinkedIn" />
						<img src="/images/icons/ig.png" alt="Instagram" />
						<img src="/images/icons/be.png" alt="Be" />
						<img src="/images/icons/dribble.png" alt="dribble" />
						<img src="/images/icons/twitter.png" alt="twitter" />
					</div>
				</div>
				<div className="col-sm-8 mx-auto col-md-7 d-flex flex-wrap justify-content-center justify-content-xl-end align-items-center nav text-center">
					<Link className="text-light col-12 pl-md-5 my-3 my-md-0 col-md-4" to="#">
						Home
					</Link>
					<Link className={`text-light col-12 pl-md-5 my-3 my-md-0 col-md-4 ${state === "nav" ? "text-pry" : ""}`} to="/work">
						Work
					</Link>
					<Link
						className={`text-light col-12 pl-md-5 my-3 my-md-0 col-md-4 ${state === "services" ? "text-pry" : ""}`}
						to="/services"
					>
						Services
					</Link>
					<Link className="text-light col-12 pl-md-5 my-3 my-md-0 col-md-4" to="#">
						About
					</Link>
					<Link className="text-light col-12 pl-md-5 my-3 my-md-0 col-md-4" to="#">
						Blog
					</Link>
					<Link className="text-light col-12 pl-md-5 my-3 my-md-0 col-md-4" to="#">
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
