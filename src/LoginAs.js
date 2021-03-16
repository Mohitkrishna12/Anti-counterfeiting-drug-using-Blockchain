import React from 'react'
import "./LoginAs.css"
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider";


function LoginAs({isNewUser,userRole}) {
	const [state, dispatch]=useStateValue();
	const setValue=(e)=>{
		const roleUser=e.target.value;
		dispatch({
			type:"ADD",
			roles:roleUser
		});
	};
	
	return (
		<div className="loginAs">
			<div className="login_as">
			<div className="login_heading">
			<h1>{isNewUser?"Login":"Resgister"} As</h1>
			<p>(*Only for {!isNewUser?"New":"Authentified"} Users)</p>
		</div>
		
		<div className="login_layout">
		<Link to={isNewUser?"/login":"/newUser"}>
			<button className="login_btn1" value="Raw Material Supplier" onClick={setValue} >Raw Material Supplier</button>
		</Link>	
		<Link to={isNewUser?"/login":"/newUser"}>
			<button className="login_btn" value="Drug Manufacturer" onClick={setValue}>Drug Manufacturer</button>
		</Link>
			
		</div>
		<div className="login_layout">
		<Link to={isNewUser?"/login":"/newUser"}>
			<button className="login_btn1" value="Drug Administrator" onClick={setValue}>Drug Administrator</button>
		</Link>
		<Link to={isNewUser?"/login":"/newUser"}>
			<button className="login_btn" value="Drug Distributer" onClick={setValue}>Drug Distributer</button>
		</Link>	
		</div>
		<div className="login_layout">
		<Link to={isNewUser?"/login":"/newUser"}>
			<button className="login_btn" value="Pharmacurtical Owner" onClick={setValue}>Pharmacurtical Owner</button>
		</Link>
		</div>
		
		</div>
		<Link to="/">
			<button className="login_btn">Back</button>
		</Link>
		
		</div>
	)
}

export default LoginAs;
