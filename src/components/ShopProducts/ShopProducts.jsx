import React from "react";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";

import { Product } from "..";

import "./ShopProducts.css";

const ShopProducts = ({ products, title }) => {
	return (
		<div className="products container">
			<div className="products-header">
				<h3 className="products-heading">{title}</h3>

				<div className="products-header-nav">
					<h4>All Items</h4>
					<ArrowRightAltOutlinedIcon />
				</div>
			</div>
			<div className="products-wrapper">
				{products.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</div>
		</div>
	);
};

export default ShopProducts;
