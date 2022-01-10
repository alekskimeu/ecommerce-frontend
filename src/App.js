import { useState } from "react";
import {
	Ad,
	Footer,
	Header,
	Hero,
	Loader,
	Products,
	Subscribe,
} from "./components";
import { newProducts, topProducts, featuredProducts } from "./data";

import "./App.css";

const App = () => {
	const [loading, setLoading] = useState(true);

	// Delay product display to display Birthday message
	setTimeout(() => setLoading(false), 2000);

	return !loading ? (
		<div className="app">
			<div className="app-wrapper">
				<Header />
				<Hero />
				{featuredProducts && (
					<Products title="Featured" products={featuredProducts} />
				)}
				<Ad />
				{newProducts && <Products title="New" products={newProducts} />}
				<Subscribe />
				{topProducts && <Products title="Top" products={topProducts} />}
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
// README
// Lazy loading
