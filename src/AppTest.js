import React from 'react'
import {Link} from 'react-router-dom'

function AppTest() {
	const getDateTime= new Date().toLocaleString('en-IN');
	return (
		<div className="AppTest">
		<div className="uploadDetails">
		<div className="details_form">
			<div className="details_heading">
			<h1>Approval Request to Drug Administrator</h1>
		</div>
		<div className="DmRequest">
			<div className="uploadForm">
			<form className="upload_form_layout"> 
			<div className="upload_input">
            <h4> Manufacturer Name</h4>
    		<input type="text" name="name" />
            </div>
            <div className="upload_input" >
            	<h4>License No </h4>
    		<input type="text" name="name"  />
            </div>
            <div className="upload_input" >
            	<h4>Date and Time </h4>
    		<input type="text" name="name" value={getDateTime} />
            </div>
            <div className="upload_input" >
            	<h4>Drug Name </h4>
    		<input type="text" name="name"  />
            </div>
            <div className="upload_input" >
            	<h4>Drug Unique No </h4>
    		<input type="text" name="name"  />
            </div>
            <div className="upload_input" >
            	<h4>Drug Information </h4>
    		<textarea rows="4" cols="60" name="comment" />
            </div>

		<Link to="/DmReqSuccessfull">
		<button className="upload_btn1">Request</button>	
     	</Link>
		</form>	
				</div>
				</div>
			</div>
				
		</div>
		</div>
	)
}

export default AppTest