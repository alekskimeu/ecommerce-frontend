import { useState } from "react";
import Home from "./pages/Home";
import { Footer, Header, Loader } from "./components";

import "./App.css";

const App = () => {
	const [loading, setLoading] = useState(true);

	// Delay product display to display Birthday message
	setTimeout(() => setLoading(false), 2000);

	return !loading ? (
		<div className="app">
			<div className="app-wrapper">
				<Header />
				<Home />
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
