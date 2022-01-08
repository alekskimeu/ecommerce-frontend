import React from "react";
import { Badge, IconButton } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import logo from "../../assets/logo.jpeg";

import "./Header.css";

const Header = () => {
	return (
		<div className="header container">
			<div className="brand">
				<img src={logo} alt="" width="80" />
			</div>
			<div className="search">
				<input
					type="search"
					placeholder="Search ..."
					className="search-input"
				/>
				<SearchOutlinedIcon />
			</div>
			<div className="header-menu">
				<div className="menu-items">
					<IconButton>
						<ShoppingCartOutlinedIcon />
					</IconButton>
					<IconButton>
						<Badge counter={5}>
							<EmailOutlinedIcon />
						</Badge>
					</IconButton>
				</div>
				<h4 className="name">
					Santana <KeyboardArrowDownOutlinedIcon />
				</h4>
			</div>
		</div>
	);
};

export default Header;
