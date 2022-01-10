import React from "react";
import { Ad, Hero, Products, Subscribe } from "../components";
import { newProducts, topProducts, featuredProducts } from "../data";

const Home = () => {
	return (
		<div>
			<Hero />
			{featuredProducts && (
				<Products title="Featured" products={featuredProducts} />
			)}
			<Ad />
			{newProducts && <Products title="New" products={newProducts} />}
			<Subscribe />
			{topProducts && <Products title="Top" products={topProducts} />}
		</div>
	);
};

export default Home;
