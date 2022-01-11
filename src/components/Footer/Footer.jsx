import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<p className="copyright">
					&copy; Santy's {new Date().getFullYear()} All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
