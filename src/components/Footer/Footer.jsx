import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<p className="copyright">
					&copy; Santy's {new Date().getFullYear()} All Rights Reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
