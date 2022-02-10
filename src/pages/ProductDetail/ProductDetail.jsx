import AddShoppingCartOutlined from "@material-ui/icons/AddShoppingCartOutlined";
import React from "react";
import image from "../../../src/assets/image.jpg";
import { SimilarProducts } from "../../components";

import "./ProductDetail.css";

const ProductDetail = () => {
	return (
		<section className="details">
			<div className="product-details">
				<div className="item">
					<img src={image} alt="" width="300" height="300" />
					<div className="item-info">
						<h2 className="item-name">Sneakers</h2>
						<h4 className="item-price">Ksh. 3500</h4>
						<p className="item-description">
							The world breaks everyone, and afterwards, many are strong at the
							broken places
						</p>
						<div className="item-cta">
							<button className="btn-cart">
								Cart
								<AddShoppingCartOutlined />
							</button>
							<div className="item-qty">
								<span>-</span>
								<span>1</span>
								<span>+</span>
							</div>
						</div>
					</div>
				</div>
				<div className="similar-products">
					<h1 className="heading">Similar products</h1>
					<SimilarProducts />
				</div>
			</div>
		</section>
	);
};

export default ProductDetail;
