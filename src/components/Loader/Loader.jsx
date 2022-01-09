import React from "react";
import img from "../../assets/subscribe.png";
import "./Loader.css";

const Loader = () => {
	return (
		<div className="loader">
			<div className="container">
				<div className="loader-wrapper">
					<img src={img} alt="" width="200" height="200" loading="lazy" />
					<h3 className="heading">🎈🎈Happy Birthday 🎈🎈</h3>
					<p className="desc">
						To the only girl who knows my passwords, 2FA device & the answers to
						all my security questions, Thank you for letting me repeatedly try
						to hack your heart..And eventually sending me to a honeypot😉.{" "}
						<br />
						This one is for you!
						<br />
						<br /> <span> HAPPY BIRTHDAY!🎂</span>
					</p>
					<p className="sender">Joy Naya</p>
				</div>
			</div>
		</div>
	);
};

export default Loader;
