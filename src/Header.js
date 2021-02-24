import React from 'react'
import "./Header.css"
import logo from "./logo.png"
import {Link} from "react-router-dom"


function Header({home}) {
	return (
		<div className="header">
		<div className="nav">
		<Link to="/">
			<a href=""><img className="header-logo" src={logo} alt="" />Anti-Counterfeiting Drug</a>
		</Link>
			
		</div>

		{home?<div className="nav_btn">
		<Link to="/login">
			<button className="btn">Login</button>
		</Link>
		<Link to="/register">
			<button className="btn1">Register</button>
		</Link>
		
		</div>:null}
		
		</div>
	)
}

export default Header