import React from 'react'
import "./UploadDetails.css"
import {useStateValue} from "./StateProvider";


function UploadDetails() {
	const [state, dispatch]=useStateValue();
	const currentUser=()=>{
		return <h1>hii</h1>
	}
	return (
		<div className="uploadDetails">
			<div className="details_form">
		<div className="details_heading">
			<h1>Upload Drug Details {state.role}</h1>
		</div>
		<form className="details_form_layout">
		{currentUser()}
		</form>	
		</div>
			
		</div>
	)
}

export default UploadDetails

