import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

import "./OrderConfirmed.css";

const OrderConfirm = () => {
	return (
		<div className="order-confirmed">
			<div className="order-wrapper">
				<p className="name">Hello, Alex.</p>
				<p className="desc">
					Your order <b>id</b> has been successfully placed. <br />
					Expected delivery in 1 week <br />
					Thank you for shopping with us!
				</p>

				<Link to="/shop" className="btn-shop">
					Continue shopping <ArrowForwardOutlinedIcon />
				</Link>
			</div>
		</div>
	);
};

export default OrderConfirm;
