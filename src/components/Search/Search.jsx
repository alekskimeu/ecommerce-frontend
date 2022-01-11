import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Search.css";

const Search = () => {
	return (
		<div className="search">
			<form>
				<input type="search" name="search" placeholder="Search product" />
				<SearchOutlined />
			</form>
		</div>
	);
};

export default Search;
