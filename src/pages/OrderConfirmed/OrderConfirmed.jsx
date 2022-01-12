import React from "react";
import { Link } from "react-router-dom";

import "./OrderConfirmed.css";

const OrderConfirm = () => {
	return (
		<div className="order-confirmed">
			<div className="order-wrapper">
				<p className="name">Hello, Alex.</p>
				<p className="desc">
					Your order <b>id</b> has been successfully placed. <br />
					Thank you for shopping with us!
				</p>

				<Link to="/shop">Continue shopping</Link>
			</div>
		</div>
	);
};

export default OrderConfirm;
