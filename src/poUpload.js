import React from 'react'
import "./Upload.css"
import {Link} from "react-router-dom"

function PoUpload() {
	return (
		<div className="PoUpload">
			<div className="req_upl">
		 <Link to="/PoReceived">
			<button className="upload_btn2">Receieved Drugs</button>
		</Link>
		</div>
		<div className="req_upl">
		<Link to="/PoBill">
			<button className="upload_btn2">Billing Info</button>	
		</Link>	
		</div>	
		</div>
	)
}

export default PoUpload