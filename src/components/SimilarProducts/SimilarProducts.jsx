import React from "react";

import { SimilarProduct } from "..";

import "./SimilarProducts.css";

const SimilarProducts = () => {
	return (
		<div className="products-container">
			<SimilarProduct />
			<SimilarProduct />
			<SimilarProduct />
		</div>
	);
};

export default SimilarProducts;
