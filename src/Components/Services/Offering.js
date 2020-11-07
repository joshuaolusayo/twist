import React from "react";
import { Link } from "react-router-dom";

const Offering = () => {
	return (
		<div className="offering bg-black pt-5">
			<h2 className="text-light font-weight-bold px-3 text-bg px-lg-5 mb-5">Business Offerings</h2>
			<div className="row-grid px-3 px-lg-5 w-100">
				<div className="bg-white mb-3 d-flex flex-column">
					<img className="img-fluid mx-auto" src="/images/services/offering/01.png" loading="lazy" alt="UX Audit" />
					<div className="p-2 p-lg-4">
						<h3 className="font-weight-bold text-center text-md-left text-warning">UX Audit</h3>
						<p>
							A UX audit is a series of steps carried out to help determine why your product is encountering issues or not
							performing at its intended capacity. Our comprehensive UX audit will provide you with hard data and actionable
							recommendations that will improve the user experience of your product.
						</p>
					</div>
				</div>
				<div className="bg-white mb-3 d-flex flex-column">
					<img className="img-fluid mx-auto" src="/images/services/offering/02.png" loading="lazy" alt="UX Research" />
					<div className="p-2 p-lg-4 info">
						<h3 className="font-weight-bold text-center text-md-left text-success">UX Research</h3>
						<p>
							User experience research is a systematic, customer-centred study, that validates the development of a product
							from concept to delivery. Our arsenal as UX researchers is our vast domain experience and well honed set of
							research methods in our tool kit. Investing in user experience research for your business guarantees higher ROI.
						</p>
					</div>
				</div>
				<div className="bg-white mb-3 d-flex flex-column">
					<img className="img-fluid mx-auto" src="/images/services/offering/03.png" loading="lazy" alt="Visual Facelift" />
					<div className="p-2 p-lg-4">
						<h3 className="font-weight-bold text-center text-md-left text-warning">Visual Facelift</h3>
						<p>
							Think your product or website is working fine but feels like the visual elements are not hitting the right
							notes? That’s when you come to us for a visual facelift, pretty much like a cosmetic surgeon we will amp up only
							the look and feel of your product without getting into the nitty-gritty of code and functionality.
						</p>
					</div>
				</div>
				<div className="bg-white mb-3 d-flex flex-column">
					<img className="img-fluid mx-auto" src="/images/services/offering/04.png" loading="lazy" alt="UX Research" />
					<div className="p-2 p-lg-4 info">
						<h3 className="font-weight-bold text-center text-md-left text-info">Heuristic Evaluation</h3>
						<p>
							Heuristic evaluation helps identify usability issues through a thorough assessment of the product's user
							interface. When usability improves, it translates into more engagement with the product and eventually a higher
							ROI. At Twist Open UX, our highly experienced team of UX researchers can conduct a heuristic evaluation of your
							product.
						</p>
					</div>
				</div>
				<div className="bg-white mb-3 d-flex flex-column">
					<img className="img-fluid mx-auto" src="/images/services/offering/05.png" loading="lazy" alt="Communication Strategy" />
					<div className="p-2 p-lg-4">
						<h3 className="font-weight-bold text-center text-md-left text-pry">Communication Strategy</h3>
						<p>
							Is your product being used effectively? Is there scope for improvement? Usability testing is a method of testing
							a product or service on a target group of users to identify usability problems. We capture the insights and
							provide an effective action plan towards creating a successful product or service.
						</p>
					</div>
				</div>
				<div className="bg-white mb-3 d-flex flex-column">
					<img className="img-fluid mx-auto" src="/images/services/offering/06.png" loading="lazy" alt="Usability Testing" />
					<div className="p-2 p-lg-4 info">
						<h3 className="font-weight-bold text-center text-md-left text-success">Usability Testing</h3>
						<p>
							Is your product being used effectively? Is there scope for improvement? Usability testing is a method of testing
							a product or service on a target group of users to identify usability problems. We capture the insights and
							provide an effective action plan towards creating a successful product or service.
						</p>
					</div>
				</div>
				<div className="bg-white mb-3 d-flex flex-column">
					<img className="img-fluid mx-auto" src="/images/services/offering/07.png" loading="lazy" alt="Service Design" />
					<div className="p-2 p-lg-4">
						<h3 className="font-weight-bold text-center text-md-left text-success">Service Design</h3>
						<p>
							Organisations have to adapt quickly to ever evolving business needs, where control is literally in the hands of
							a customer. Service design is the process of improving the people, processes, culture, and assets of an
							organisation to improve the quality and interaction of service users as well as service providers.
						</p>
					</div>
				</div>
				<div className="bg-white mb-3 d-flex flex-column">
					<img className="img-fluid mx-auto" src="/images/services/offering/08.png" loading="lazy" alt="Intranet Interfaces" />
					<div className="p-2 p-lg-4 info">
						<h3 className="font-weight-bold text-center text-md-left text-info">Intranet Interfaces</h3>
						<p>
							Intelligent design and development of intranet interfaces ensures the success of good organizational network. We
							can help you design interfaces that are intuitive, easy to navigate and do not require resources to train
							employees.
						</p>
					</div>
				</div>
				<div className="bg-black border-dotted mb-3 d-flex flex-column">
					<img className="img-fluid mx-auto" src="/images/services/offering/09.png" loading="lazy" alt="Connect" />
					<div className="p-2 p-lg-4">
						<p className="text-white">Is there anything else we can help you with?</p>
						<Link to="/">
							<button className="btn w-100 btn-outline-light py-2 py-md-3">Connect</button>
						</Link>
					</div>
				</div>
				<div className="bg-white mb-3 d-flex flex-column">
					<img className="img-fluid mx-auto" src="/images/services/offering/10.png" loading="lazy" alt="UX for SasS Products" />
					<div className="p-2 p-lg-4 info">
						<h3 className="font-weight-bold text-center text-md-left text-success">UX for SaaS Products</h3>
						<p>
							Software as a service is a cloud based hosting of a software application that grants users licence to this
							software on a subscription model. We can help you develop a phenomenal SaaS product from scratch, for your
							customers.
						</p>
					</div>
				</div>
				<div className="bg-white mb-3 d-flex flex-column">
					<img className="img-fluid mx-auto" src="/images/services/offering/11.png" loading="lazy" alt="UX for Enterprise Apps" />
					<div className="p-2 p-lg-4 info">
						<h3 className="font-weight-bold text-center text-md-left text-info">UX for Enterprise Apps</h3>
						<p>
							Enterprise apps are software applications designed specifically for enterprises. They digitise entire business
							processes through a single software to maximise efficiency and reduce dependencies. Our expertise in the field
							can help change the game for your business.
						</p>
					</div>
				</div>
				<div className="bg-white mb-3 d-flex flex-column">
					<img className="img-fluid mx-auto" src="/images/services/offering/02.png" loading="lazy" alt="UX Research" />
					<div className="p-2 p-lg-4 info">
						<h3 className="font-weight-bold text-center text-md-left text-pry">UX for Mobile & Web Apps</h3>
						<p>
							A mobile app is a software application developed for smaller mobile gadgets like phones, watches and tablets
							while a web application runs on a web browser rather than directly on the mobile device. Looking to develop a
							web or mobile app? Our in-house UX capabilities ensure top notch mobile and web app development.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offering;
