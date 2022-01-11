import React, { useEffect, useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import { Loader, Search, ShopProducts } from "../../components";
import { featuredProducts } from "../../data";

import "./Shop.css";

const Shop = () => {
	const [products, setProducts] = useState([1]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [dropdown, setDropdown] = useState(false);

	setTimeout(() => setLoading(false), 2000);

	const displayDropdown = () => {
		setDropdown(!dropdown);
	};

	return !loading ? (
		<div className="shop">
			{/* Search */}
			{/* Dropdown categories */}
			<div className="shop-header">
				<Search />
				<div className="dropdown">
					<h4 onClick={displayDropdown}>
						Categories
						<KeyboardArrowDownOutlinedIcon />
					</h4>
					<div
						className="dropdown-categories"
						style={{ display: dropdown ? "block" : "none" }}
					>
						<h4 className="category-link" onClick={displayDropdown}>
							Pillows
						</h4>
						<h4 className="category-link" onClick={displayDropdown}>
							Suits
						</h4>
						<h4 className="category-link" onClick={displayDropdown}>
							Baby Nest
						</h4>
						<h4 className="category-link" onClick={displayDropdown}>
							Curtains
						</h4>
					</div>
				</div>
			</div>

			{products && (
				<ShopProducts title="Featured" products={featuredProducts} />
			)}
		</div>
	) : (
		<Loader />
	);
};

export default Shop;
