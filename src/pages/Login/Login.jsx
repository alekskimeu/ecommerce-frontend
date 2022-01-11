import ExitToApp from "@material-ui/icons/ExitToApp";
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Form.css";

const Login = () => {
	return (
		<div className="login">
			<div className="login-wrapper">
				<h4 className="heading">Login</h4>
				<form>
					<input type="email" name="email" placeholder="Your Email..." />
					<input
						type="password"
						name="password"
						placeholder="Your Password..."
					/>
					<div className="form-check">
						<input type="checkbox" name="" /> <span>Remember me</span>
					</div>
					<button className="btn-submit">
						Login <ExitToApp />
					</button>
				</form>
				<h4 className="text">
					Don't have an account? <Link to="/register">Register here</Link>
				</h4>
			</div>
		</div>
	);
};

export default Login;
