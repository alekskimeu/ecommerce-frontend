import React from "react";
import { IconButton } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AddShoppingCartOutlined from "@material-ui/icons/AddShoppingCartOutlined";

import "./Product.css";

const Product = ({ product }) => {
	return (
		<div className="product">
			<div className="image">
				<img
					src={product.image}
					alt=""
					width="200"
					height="200"
					loading="lazy"
				/>
			</div>
			<div className="product-info">
				<h4 className="name">{product.name}</h4>
				<p className="price">Ksh. {product.price}</p>
			</div>
			<div className="product-cta">
				<IconButton>
					<InfoOutlinedIcon />
				</IconButton>
				<IconButton>
					<AddShoppingCartOutlined />
				</IconButton>
			</div>
		</div>
	);
};

export default Product;
