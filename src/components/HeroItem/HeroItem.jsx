import React from "react";
import { IconButton } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";

import "./HeroItem.css";

const HeroItem = ({ product }) => {
	return (
		<div className="hero-item">
			<div className="hero-item-header">
				<IconButton>
					<InfoOutlinedIcon />
				</IconButton>
				<IconButton>
					<AddShoppingCartOutlinedIcon />
				</IconButton>
			</div>
			<div className="hero-banner">
				<div className="hero-circle"></div>
			</div>
			<img src={product.image} alt="" width="150" height="150" />
			<h4 className="hero-item-name">{product.name}</h4>
			<p className="hero-item-price">Ksh. {product.price}</p>
		</div>
	);
};

export default HeroItem;
