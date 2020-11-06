import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import { ModalSlide } from "./ModalSlide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slide = () => {
	const [size, setSize] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [text1, setText1] = useState("");
	const [text2, setText2] = useState("");

	const openModal = (a, b) => {
		setShowModal((prev) => !prev);
		setText1(a);
		setText2(b);
	};

	Modal.setAppElement("#root");

	const [settings, setSettings] = useState({
		dots: true,
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "40px",
		slidesToShow: 2,
		speed: 500,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767, // width to change options
				settings: {
					slidesToShow: 1,
					centerPadding: "0px",
				},
			},
		],
	});

	useEffect(() => {
		function updateSize() {
			setSize(window.innerWidth);
			if (window.innerWidth > 767) {
				setSettings({
					...settings,
					centerPadding: "40px",
					slidesToShow: 2,
				});
			} else {
				setSettings({
					...settings,
					centerPadding: "0px",
					slidesToShow: 1,
				});
			}
		}

		window.addEventListener("load", updateSize);
		window.addEventListener("resize", updateSize);

		return () => {
			window.removeEventListener("load", updateSize);
			window.removeEventListener("resize", updateSize);
		};
	}, [size, settings]);

	return (
		<div className="slider bg-black text-white pb-5">
			<div className="wdg col-sm-8 col-md-9 mx-auto">
				<Slider {...settings}>
					<div
						className="p-4 p-lg-5 h-100 show-modal bg-primary"
						onClick={() => openModal("Awesome", "Enter your email address")}
					>
						<h3 className="font-weight-bold">I am building a product from scratch.</h3>
					</div>
					<div
						className="p-4 p-lg-5 h-100 show-modal bg-pry"
						onClick={() => openModal("Fantastic", "We can help you build your product. Share your email")}
					>
						<h3 className="font-weight-bold">My existing product needs additional features.</h3>
					</div>
					<div
						className="p-4 p-lg-5 h-100 show-modal bg-warning"
						onClick={() => openModal("Right on", "We can help you uncover valuable user insights. Share your email.")}
					>
						<h3 className="font-weight-bold">I want to understand my target users better.</h3>
					</div>
					<div
						className="p-4 p-lg-5 h-100 show-modal bg-success"
						onClick={() => openModal("Lovely", "We can help you jazz your product up. Share your email.")}
					>
						<h3 className="font-weight-bold">My product needs a facelift.</h3>
					</div>
					<div
						className="p-4 p-lg-5 h-100 show-modal bg-warning"
						onClick={() => openModal("Great", "We can help you manage your resources better. Share your email.")}
					>
						<h3 className="font-weight-bold">I need to augment my internal design team.</h3>
					</div>
				</Slider>
				<ModalSlide showModal={showModal} setShowModal={setShowModal} text1={text1} text2={text2} />
			</div>
		</div>
	);
};

export default Slide;
