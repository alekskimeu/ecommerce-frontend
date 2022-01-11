import ExitToApp from "@material-ui/icons/ExitToApp";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="login">
			<div className="login-wrapper">
				<h4 className="heading">Register</h4>
				<form>
					<input type="text" name="name" placeholder="Your Name..." />
					<input type="email" name="email" placeholder="Your Email..." />
					<input
						type="password"
						name="password"
						placeholder="Your Password..."
					/>
					<button className="btn-submit">
						Register <ExitToApp />
					</button>
				</form>
				<h4 className="text">
					Already a member? <Link to="/login">Login here</Link>
				</h4>
			</div>
		</div>
	);
};

export default Register;
