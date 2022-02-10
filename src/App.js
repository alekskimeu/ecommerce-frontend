import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {
	About,
	Cart,
	Checkout,
	Home,
	Login,
	OrderConfirmed,
	Orders,
	ProductDetail,
	Register,
	Shop,
} from "./pages";
import { Footer, Header, Loader } from "./components";

import "./App.css";

const App = () => {
	const [loading, setLoading] = useState(true);

	setTimeout(() => setLoading(false), 100);

	return !loading ? (
		<Router>
			<div className="app">
				<Header />
				<div className="app-wrapper container">
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/login" element={<Login />} />
						<Route path="/orders" element={<Orders />} />
						<Route path="/details" element={<ProductDetail />} />
						<Route path="/register" element={<Register />} />
						<Route path="/shop" element={<Shop />} />
						<Route path="/thankyou" element={<OrderConfirmed />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	) : (
		<div className="loader-container">
			<Loader />
		</div>
	);
};

export default App;

// Overflow X issue

