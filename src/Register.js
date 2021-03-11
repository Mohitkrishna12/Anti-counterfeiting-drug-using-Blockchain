import React from 'react'
import "./Register.css"
import {useStateValue} from "./StateProvider";

function Register({props}) {
	const [state, dispatch]=useStateValue();
	const regValue=()=>{
		switch(state.role){
			case "Raw Material Supplier":
    		 return"Raw Material";
    		break;
  			case "Drug Manufacturer":
   		 	return"Drug Manufacturer";;
		    break;
		    case "Drug Administrator":
   		 	return"Drug Administrator";;
		    break;
		    case "Drug Distributer":
   		 	return"Drug Distributer";;
		    break;
		    case "Pharmacurtical Owner":
   		 	return"Pharmacurtical Shop";;
		    break;
		  	
		} 

	}
	return (
		<div className="register">
		<div className="reg_form">
		<div className="reg_heading">
			<h1>Register As {state.role}</h1>
		</div>
		<form className="reg_form_layout">
		<div className="reg_input"> 
			<h4>{state.role==="Pharmacurtical Owner"?"Shop":"Company"} Name  <span>*</span> </h4>
    	<input type="text" name="name" />
		</div>
		<div className="reg_input"> 
			<h4>Country  <span>*</span> </h4>
    	<input type="text" name="name" />
		</div>
		<div className="reg_input"> 
			<h4>State  <span>*</span> </h4>
    	<input type="text" name="name" />
		</div>
		<div className="reg_input"> 
			<h4>Address  <span>*</span> </h4>
    	<textarea rows="4" cols="50" name="comment" />
		</div>
		<div className="reg_input">
		<h4> {regValue()} License  <span>*</span> </h4>
		
			
    	<input type="text" name="name" />
		</div>
		<div className="reg_input"> 
			<h4>Valid Upto  <span>*</span> </h4>
    	<input type="date" name="name" />
		</div>
		<button className="login_btn">Register</button>	
		</form>	
		</div>
		</div>
	)
}

export default Register