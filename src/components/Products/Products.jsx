import React from "react";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";

import { Product } from "..";

import "./Products.css";
import { IconButton } from "@material-ui/core";

const Products = () => {
	return (
		<div className="products container">
			<div className="products-header">
				<h3 className="products-heading">Featured</h3>

				<div className="products-header-nav">
					<h4>All Items</h4>
					<ArrowRightAltOutlinedIcon />
				</div>
			</div>
			<div className="products-wrapper">
				<div className="products-nav-left">
					<IconButton style={{}}>
						<ChevronLeftOutlinedIcon />
					</IconButton>
				</div>
				<div className="products-nav-right">
					<IconButton style={{}}>
						<ChevronRightOutlinedIcon />
					</IconButton>
				</div>
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
};

export default Products;
