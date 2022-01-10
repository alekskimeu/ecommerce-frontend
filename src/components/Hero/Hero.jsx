import React from "react";
import { HeroItem } from "..";

import { displayProducts } from "../../data";
import "./Hero.css";

const Hero = () => {
	return (
		<div className="hero">
			<h3 className="heading">Noelas Shop</h3>
			<div className="hero-wrapper">
				{displayProducts.map((product) => (
					<HeroItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Hero;
