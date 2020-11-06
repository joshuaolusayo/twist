import React from "react";
import ReactDOM from "react-dom";


import { BrowserRouter, Route } from "react-router-dom";

import "./styles.css";

import Work from "./Components/Work";
import Services from "./Components/Services";


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Route exact path="/" component={Work}></Route>
			<Route exact path="/work" component={Work}></Route>
			<Route exact path="/services" component={Services}></Route>
			
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);