import React from 'react'
import {Link} from "react-router-dom"

function RmUpload() {
	return (
		<div className="RmUpload">
		<div className="req_upl">
		 <Link to="/RmRequest">
			<button className="upload_btn2">Process Request</button>
		</Link>
		</div>
		</div>
			
			
		
	)
}

export default RmUpload