import React from "react";
import { HeroItem } from "..";

import "./Hero.css";

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<h3 className="heading">Santy's Night Light</h3>
				<div className="hero-wrapper">
					<HeroItem />
					<HeroItem />
					<HeroItem />
				</div>
			</div>
		</div>
	);
};

export default Hero;
