import React from "react";
import { Ad, Hero, HomeProducts, Subscribe } from "../../components";
import { newProducts, topProducts, featuredProducts } from "../../data";

const Home = () => {
	return (
		<div>
			<Hero />
			{featuredProducts && (
				<HomeProducts title="Featured" products={featuredProducts} />
			)}
			<Ad />
			{newProducts && <HomeProducts title="New" products={newProducts} />}
			<Subscribe />
			{topProducts && <HomeProducts title="Top" products={topProducts} />}
		</div>
	);
};

export default Home;
