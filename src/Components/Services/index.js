import React, { useState, useEffect } from "react";
import Nav from "../ReusableComponents/Nav";
import Banner from "../ReusableComponents/Banner";
import Slide from "./Slide";
import Offering from "./Offering";
import Capabilities from "./Capabilities";
import Clients from "./Clients";
import Footer from "../ReusableComponents/Footer";

const Services = () => {
	const [nav] = useState("services");
	const [text] = useState("help you?");

	const [banner] = useState("/images/services/banner.png");

	useEffect(() => {
		window.scrollTo(0,0);
	}, [nav])
	
	return (
		<div className="container-fluid work px-0">
			<Nav state={nav} />
			<Banner img={banner} text={text} />
			<Slide />
			<Offering />
			<Capabilities />
			<Clients />
			<Footer state={nav} />
		</div>
	);
};

export default Services;
