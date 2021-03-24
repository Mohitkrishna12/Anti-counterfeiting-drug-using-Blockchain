import React from 'react'
import "./UploadDetails.css"
import {useStateValue} from "./StateProvider";
import RmUpload from "./RmUpload";
import DmUpload from "./DmUpload";
import DaUpload from "./DaUpload";
import DdUpload from "./DdUpload";
import PoUpload from "./PoUpload";




function UploadDetails() {
	const [state, dispatch]=useStateValue();
	const currentUser=()=>{
		switch(state.role){
			case "Raw Material Supplier":
    		 return (<div>
    		 		<RmUpload />
    		 	</div>);
    		break;
  			case "Drug Manufacturer":
   		 	return (<div>
    		 		<DmUpload />
    		 	</div>);
		    break;
		    case "Drug Administrator":
   		 	return (<div>
    		 		<DaUpload />
    		 	</div>);
		    break;
		    case "Drug Distributer":
   		 	return (<div>
    		 		<DdUpload />
    		 	</div>);
		    break;
		    case "Pharmacurtical Owner":
   		 	return (<div>
    		 		<PoUpload />
    		 	</div>);
		    break;
		    default :
		    return (<div>
    		 		<RmUpload />
    		 	</div>);

		  	
		} 
		

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