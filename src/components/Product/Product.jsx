import React from "react";
import { IconButton } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AddShoppingCartOutlined from "@material-ui/icons/AddShoppingCartOutlined";

import img from "../../assets/pop.png";
import "./Product.css";

const Product = () => {
	return (
		<div className="product">
			<div className="product-circle"></div>
			<div className="image">
				<img src={img} alt="" width="200" height="200" />
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
