import React from 'react'
import "./Upload.css"
import {Link} from "react-router-dom";

function DdUpload() {
	return (
		<div className="DdUpload">
		<div className="req_upl">
		 <Link to="/DdTrans">
			<button className="upload_btn2">Arrival Details</button>
		</Link>
		</div>
		<div className="req_upl">
		<Link to="/DdDelivery">
			<button className="upload_btn2">Delivery Details</button>	
		</Link>	
		</div>	
		</div>
	)
}

export default DdUpload