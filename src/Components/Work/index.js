import React, { useState, useEffect } from "react";
import Nav from "../ReusableComponents/Nav";
import Banner from "../ReusableComponents/Banner";
import Card from "./Card";
import Footer from "../ReusableComponents/Footer";

const Work = () => {
	const [nav] = useState("nav");
	const [text] = useState("our labour");

	useEffect(() => {
		window.scrollTo(0,0);
	}, [nav])

	const [banner] = useState("/images/work/fruits.png");
	return (
		<div className="container-fluid work px-0">
			<Nav state={nav} />
			<Banner img={banner} text={text} />
			<Card />
			<Footer state={nav} />
		</div>
	);
};

export default Work;
