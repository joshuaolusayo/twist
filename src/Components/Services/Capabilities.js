import React from "react";

const Capabilities = () => {
	return (
		<div className="bg-black capabilities py-5 px-3 px-lg-5 text-white">
			<h2 className="text-light font-weight-bold text-bg mb-5">Capabilities</h2>
			<div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center flex-md-nowrap my-sm-3 my-lg-4 col-sm-12 col-lg-10 col-xl-11 mx-auto">
				<span className="bg-success d-sm-none"></span>
				<p className="one">User Research</p>

				<span className="bg-warning"></span>
				<p className="two">UX Strategy & Design</p>

				<span className="bg-info"></span>
				<p className="three">Competitor Analysis</p>
			</div>
			<div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center flex-md-nowrap my-sm-3 my-lg-4 col-sm-12 col-lg-10 col-xl-11 mx-auto">
				<span className="bg-warning d-sm-none"></span>
				<p className="four">Usability Testing</p>

				<span className="bg-info"></span>
				<p className="five">Visual Design</p>

				<span className="bg-danger"></span>
				<p className="six">Service Design</p>

				<span className="bg-pry"></span>
				<p className="seven">Branding</p>
			</div>
			<div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center flex-md-nowrap my-sm-3 my-lg-4 col-sm-12 col-lg-10 col-xl-11 mx-auto">
				<span className="bg-danger d-sm-none"></span>
				<p className="eight">Motion Design</p>

				<span className="bg-warning"></span>
				<p className="nine">Single Feature Revamp</p>

				<span className="bg-success"></span>
				<p className="ten">Corporate Website</p>
			</div>
			<div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center flex-md-nowrap my-sm-3 my-lg-4 col-sm-12 col-lg-10 col-xl-11 mx-auto">
				<span className="bg-warning d-sm-none"></span>
				<p className="eleven">Graphics Design</p>

				<span className="bg-danger"></span>
				<p className="twelve">Content Strategy</p>

				<span className="bg-success"></span>
				<p className="thirteen">Usability Audit</p>

				<span className="bg-info"></span>
				<p className="fourteen">Illustration</p>
			</div>
		</div>
	);
};

export default Capabilities;
