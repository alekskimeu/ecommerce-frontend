import React from "react";
import image from "../../assets/image.jpg";

import "./Cart.css";

const Cart = () => {
	return (
		<div className="checkout">
			<div className="customer-details">
				<div className="shipping">SHIPPING</div>
				<div className="payment">PAYMENT</div>
			</div>
			<div className="customer-order">
				<h1 className="title"> Your order</h1>
				<div className="customer-order-container">
					<div className="order">
						<img src={image} alt="" width={100} />
						<div className="order-info">
							<h2 className="item-name">Sneakers</h2>
							<h4 className="item-cost">Ksh. 3500</h4>
							<div className="order-cta">
								<button className="btn-cart-remove">Remove</button>
								<div className="order-action">
									<button className="order-qty-deduct">-</button>
									<span className="order-qty">1</span>
									<button className="order-qty-add">+</button>
								</div>
							</div>
						</div>
					</div>
					<div className="order">
						<img src={image} alt="" width={100} />
						<div className="order-info">
							<h2 className="item-name">Sneakers</h2>
							<h4 className="item-cost">Ksh. 3500</h4>
							<div className="order-cta">
								<button className="btn-cart-remove">Remove</button>
								<div className="order-action">
									<button className="order-qty-deduct">-</button>
									<span className="order-qty">1</span>
									<button className="order-qty-add">+</button>
								</div>
							</div>
						</div>
					</div>
					<div className="order-total">
						<h4>Total:</h4>
						<h4>Ksh. 3500</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
