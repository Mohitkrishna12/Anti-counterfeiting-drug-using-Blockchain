import React from 'react'
import {Link} from 'react-router-dom';

function DmReqSuccessfull() {
	return (
		<div className="DmReqSuccessfull">
			<div className="details_heading">
			<h1>Request Sent Successfully </h1>
			<Link to="/Userlogin">
		<button className="upload_btn1">Back</button>	
     	</Link>
		</div>
		</div>
	)
}

export default DmReqSuccessfull