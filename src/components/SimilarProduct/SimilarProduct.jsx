import React from "react";
import { Link } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import image from "../../assets/image.jpg";

import "./SimilarProduct.css";

const SimilarProduct = () => {
	return (
		<div className="product-card">
			<img src={image} alt="" width="150" height="150" />
			<div className="product-item-info">
				<h3 className="name">Sneakers</h3>
				<h4 className="price">Ksh. 3500</h4>

				<div className="product-item-cta">
					<Link to="/" className="btn-more">
						View
						<InfoOutlinedIcon />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SimilarProduct;
