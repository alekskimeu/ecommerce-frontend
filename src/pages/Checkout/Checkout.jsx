import React from "react";
import { Link } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";

import image from "../../assets/image.jpg";

import "./Checkout.css";

// Breakdown to components

const Checkout = () => {
	return (
		<div className="checkout">
			<div className="customer-details">
				<div className="shipping">
					<div className="shipping-header">
						<h1 className="title">Shipping Address</h1>
						<Link to="/">Change</Link>
					</div>
					<div className="shipping-location">
						<p className="description">Mathare North Area 4</p>
					</div>
				</div>
				<div className="payment">
					<div className="payment-header">
						<h1 className="title">Payment method</h1>
					</div>
					<div className="payment-modes">
						<div className="mode">
							<input type="radio" name="mode" />
							Cash on Delivery
						</div>
						<div className="mode">
							<input type="radio" name="mode" />
							M-Pesa on Delivery
						</div>
						<div className="mode">
							<input type="radio" name="mode" />
							M-Pesa Express
						</div>
					</div>
				</div>
			</div>
			<div className="customer-order">
				<h1 className="title"> Your order</h1>
				<div className="customer-order-container">
					<div className="order">
						<img src={image} alt="" width={100} />
						<div className="order-info">
							<div className="order-info-header">
								<h2 className="item-name">Sneakers</h2>
								<CancelIcon />
							</div>
							<h4 className="item-cost">Ksh. 3500</h4>
							<div className="order-cta">
								{/* <button className="btn-cart-remove">Remove</button> */}
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
						<div className="order-info-header">
								<h2 className="item-name">Sneakers</h2>
								<CancelIcon />
							</div>
							<h4 className="item-cost">Ksh. 3500</h4>
							<div className="order-cta">
								{/* <button className="btn-cart-remove">Remove</button> */}
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
					<Link to="/thankyou" className="btn-order">
						Place Order
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
