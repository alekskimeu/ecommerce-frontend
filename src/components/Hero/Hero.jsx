import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";

import image from "../../assets/subscribe.png";

import "./Hero.css";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-nav">
				<IconButton>
					<ChevronLeftOutlinedIcon />
				</IconButton>
				<IconButton className="hero-nav-right">
					<ChevronRightOutlinedIcon />
				</IconButton>
			</div>
			<div className="hero-wrapper">
				<div className="hero-content">
					<h1 className="content-heading">The world</h1>
					<p className="description">
						The world breaks everyone, and afterwards, many are strong at the
						broken places
					</p>
					<div className="hero-cta">
						<Link to="/shop">
							Shop Now <ArrowForwardOutlinedIcon />{" "}
						</Link>
					</div>
				</div>
				<div className="hero-image">
					<img src={image} alt="" width="300" height="300" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
