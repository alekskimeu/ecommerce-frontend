import React from "react";
import loader from "../../assets/loader.gif";

import "./Loader.css";

const Loader = () => {
	return (
		<div className="loader">
			<div className="container">
				<img src={loader} alt="Loading..." width="80" height="80" />
			</div>
		</div>
	);
};

export default Loader;
