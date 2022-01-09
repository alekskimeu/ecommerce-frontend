import React from "react";
import "./Loader.css";

import { message } from "../../data";

const Loader = () => {
	return (
		<div className="loader">
			<div className="container">
				{message.map((msg) => (
					<div className="loader-wrapper" key={msg.id}>
						<img src={msg.image} alt="" width="200" height="200" />
						<h3 className="heading">{msg.title}</h3>
						<p className="desc">{msg.content}</p>
						<p className="sender">{msg.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Loader;
