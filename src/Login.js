import React from 'react'
import "./Login.css"

function Login() {
	return (
		<div className="login">
		<div className="login-container">
			<h1>Login</h1>
			<form className="reg_form_layout">
				<h5>License No:</h5>
				<input type="text"  />
				<h5>Password</h5>
				<input type="password"  />
				<button className="login_btn" >Sign In</button>

			</form>
		</div>
			
		</div>
	)
}

export default Login