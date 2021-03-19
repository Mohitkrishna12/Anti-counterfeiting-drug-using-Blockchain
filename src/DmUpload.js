import React from 'react'
import "./Upload.css"
import {Link} from "react-router-dom";

function DmUpload() {
	return (
		<div className="DmUpload">
		<div className="req_upl">
		 <Link to="/DmRequest">
			<button className="upload_btn2">Request Drug</button>
		</Link>
		</div>
		<div className="req_upl">
		<Link to="/DMUploaded">
			<button className="upload_btn2">upload Details</button>	
		</Link>		
		</div>
		</div>
	)
}

export default DmUpload