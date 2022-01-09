import React from "react";
import img from "../../assets/man.png";

import "./Ad.css";

const Ad = () => {
	return (
		<div className="ad">
			<div className="ad-container">
				<div className="ad-image">
					<img src={img} alt="" width="400" height="300" loading="lazy" />
				</div>
				<div className="ad-info">
					<h3 className="heading">Quality Items</h3>
					<p className="desc">
						The world breaks everyone, and afterwards, many are strong at the
						broken places.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Ad;
