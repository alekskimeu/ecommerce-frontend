import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {About, Cart, Checkout, Home, Login, OrderConfirmed, Orders, Register, Shop} from "./pages";
import { Footer, Header, Loader } from "./components";

import "./App.css";

const App = () => {
	const [loading, setLoading] = useState(true);

	// Delay product display to display Birthday message
	setTimeout(() => setLoading(false), 2000);

	return !loading ? (
		<Router>
			<div className="app">
					<Header />
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/login" element={<Login />} />
						<Route path="/thankyou" element={<OrderConfirmed/>} />
						<Route path="/orders" element={<Orders />}/>
						<Route path="/register" element={<Register />} />
						<Route path="/shop" element={<Shop />} />
					</Routes>
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

