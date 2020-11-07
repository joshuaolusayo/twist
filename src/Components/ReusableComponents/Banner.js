import React from "react";

const Banner = ({ img, text }) => {
	return (
		<div className="banner bg-black py-8">
			<img src={`${img}`} alt="banner-text" loading="lazy" />
			<h4 className="font-weight-bold text-light text-right">{`${text}`}</h4>
		</div>
	);
};

export default Banner;
