import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Badge, IconButton } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import logo from "../../assets/logo.jpeg";

import "./Header.css";

const Header = () => {
	const [user, setUser] = useState("soda");
	const [dropdown, setDropdown] = useState(false);

	const showDropdown = () => setDropdown(!dropdown);

	return (
		<header className="header">
			<div className="brand">
				<img src={logo} alt="" width="80" />
			</div>
			<div className="header-div">
				<Link to="/">Home</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/about">About</Link>
			</div>
			<Outlet />
			<div className="header-menu">
				<div className="menu-items">
					<Link to="/cart">
						<IconButton>
							<ShoppingCartOutlinedIcon />
						</IconButton>
					</Link>
					<IconButton>
						<Badge counter={5}>
							<EmailOutlinedIcon />
						</Badge>
					</IconButton>
				</div>
				{user ? (
					<div className="account-info">
						<h4 className="name" onClick={showDropdown}>
							Username <KeyboardArrowDownOutlinedIcon />
						</h4>
						<div
							className="dropdown-menu"
							style={{ display: dropdown ? "flex" : "none" }}
						>
							<Link to="/account" onClick={showDropdown}>
								My Account
							</Link>
							<Link to="/orders" onClick={showDropdown}>
								My Orders
							</Link>
							<Link to="/logout" className="btn-logout" onClick={showDropdown}>
								Logout
							</Link>
						</div>
					</div>
				) : (
					<div className="header-account">
						<Link to="/login" className="btn-login">
							Login <ExitToAppIcon />
						</Link>
						<Link to="/register" className="btn-register">
							Register
						</Link>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
