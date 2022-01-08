import { useState, useEffect } from "react";
import {
	Ad,
	Footer,
	Header,
	Hero,
	Loader,
	Products,
	Subscribe,
} from "./components";
import "./App.css";

const App = () => {
	const [loading, setLoading] = useState(true);

	// Delay product display to display Birthday message
	setTimeout(() => setLoading(false), 8000);

	return !loading ? (
		<div className="app">
			<div className="app-wrapper container">
				<Header />
				<Hero />
				<Products />
				<Ad />
				<Products />
				<Subscribe />
				<Products />
			</div>
			<Footer />
		</div>
	) : (
		<div className="loader-container">
			<Loader />
		</div>
	);
};

export default App;

// Overflow X issue
// Backend
// API connection
// Meta description
