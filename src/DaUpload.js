import React from 'react'
import {Link} from "react-router-dom"

function DaUpload() {
	return (
		<div className="DaUpload">
		<div className="req_upl">
		 <Link to="/RmRequest">
			<button className="upload_btn2">Approval Request</button>
		</Link>
		</div>
		<div className="req_upl">
		<Link to="/RMUploaded">
			<button className="upload_btn2">Upload Details</button>	
		</Link>	
		</div>
		</div>
	)
}

export default DaUpload