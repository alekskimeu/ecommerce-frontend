import React from "react";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import "./Subscribe.css";
import img from "../../assets/subscribe.png";

const Subscribe = () => {
	return (
		<div className="subscribe">
			<div className="subscribe-info">
				<h3 className="heading">Join our mail list</h3>
				<p className="desc">
					The world breaks everyone, and afterwards, many are strong at the
					broken places
				</p>
				<div className="subscribe-input">
					<input type="email" className="input" placeholder="Email address" />
					<button className="btn-subscribe">
						Subscribe <SendOutlinedIcon />
					</button>
				</div>
			</div>
			<div className="subscribe-image">
				<img src={img} alt="" width="300" height="300" />
			</div>
		</div>
	);
};

export default Subscribe;
