import React from 'react'
import "./RmUpload.css";

function RmUpload() {
	return (
		<div className="RmUpload">
			<div className="uploadForm">
			<form className="reg_form_layout">
		<div className="reg_input"> 
			<h4> Name  <span>*</span> </h4>
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
		<h4>  License  <span>*</span> </h4>
		
			
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

export default RmUpload