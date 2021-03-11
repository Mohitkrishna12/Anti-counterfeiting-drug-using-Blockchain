import React from 'react'
import "./Login.css";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";;

function Login() {
	const [state, dispatch]=useStateValue();
	return (
		<div className="login">
		<div className="login-container">
		<div className="login_heading">
			<h1>Login as {state.role}</h1>
		</div>
			<form className="login_form_layout">
			<div className="login_input">
				<h4>License No</h4>
				<input type="text"  />
			</div>
			<div className="login_input">
				<h4>Password</h4>
				<input type="password"  />
			</div>
				
				<button className="login_btn" >Sign In</button>

			</form>
		</div>
		<div className="login-newaccounttext">
			<h5>or</h5>
		</div>
		<Link to="/register">
		<button className="login_btn">Register</button>
		</Link>
		</div>
	
		
			
		
	)
}

export default Login