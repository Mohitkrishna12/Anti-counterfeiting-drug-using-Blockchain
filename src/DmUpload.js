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
		<Link to="/AppTest">
			<button className="upload_btn2">Approval & Testing</button>	
		</Link>	
		</div>	
		<div className="req_upl">
		<Link to="/DmProduction">
			<button className="upload_btn2">Production</button>	
		</Link>	
		</div>
		<div className="req_upl">
		<Link to="/DmDistribution">
			<button className="upload_btn2">Distribution</button>	
		</Link>	
		</div>	
		</div>
	)
}

export default DmUpload