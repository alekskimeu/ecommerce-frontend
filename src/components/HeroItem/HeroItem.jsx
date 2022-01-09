import React from "react";
import { IconButton } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import img from "../../assets/pop.png";

import "./HeroItem.css";

const HeroItem = () => {
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
			<img src={img} alt="" width="150" height="150" loading="lazy" />
			<h4 className="hero-item-name">Nike shoe</h4>
			<p className="hero-item-price">Ksh. 3500.00</p>
		</div>
	);
};

export default HeroItem;
