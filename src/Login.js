import React from 'react'
import "./Login.css"
import {Link} from "react-router-dom"

function Login({isNewUser}) {
	return (
		<div className="login">
			<div className="login_as">
			<div className="login_heading">
			<h1>{isNewUser?"Login":"Resgister"} As</h1>
			<p>(*Only for {!isNewUser?"New":"Authentified"} Users)</p>
		</div>
		<div className="login_layout">
		<Link to={isNewUser?"/login":"/newUser"}>
			<button className="login_btn1">Raw Material Supplier</button>
		</Link>	
		<Link to={isNewUser?"/login":"/newUser"}>
			<button className="login_btn">Drug Manufacturer</button>
		</Link>
			
		</div>
		<div className="login_layout">
		<Link to={isNewUser?"/login":"/newUser"}>
			<button className="login_btn1">Drug Administrator</button>
		</Link>
		<Link to={isNewUser?"/login":"/newUser"}>
			<button className="login_btn">Drug Distributer</button>
		</Link>	
		</div>
		<div className="login_layout">
		<Link to={isNewUser?"/login":"/newUser"}>
			<button className="login_btn">Pharmacurtical Owner</button>
		</Link>
		</div>
		</div>
		<Link to="/">
			<button className="login_btn">Back</button>
		</Link>
		
		</div>
	)
}

export default Login