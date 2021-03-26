import React,{useState} from 'react'
import {Link} from "react-router-dom"


function PoBill() {
	const getDateTime= new Date().toLocaleString('en-IN');
	const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

	 function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }
	return (
		<div className="PoBill">
			<div className="uploadDetails">
			<div className="details_form">
			<div className="details_heading">
			<h1>Billing Summary</h1>
		</div>
		<div className="DmRequest">
			<div className="uploadForm">
			<form className="upload_form_layout"> 
			<div className="upload_input">
            <h4> Pharmacy Name</h4>
    		<input type="text" name="name" />
            </div>
            <div className="upload_input" >
            	<h4>License No </h4>
    		<input type="text" name="name"  />
            </div>
            <div className="upload_input">
            <h4> Pharmacy Address</h4>
    		<input type="text" name="name" />
            </div>
            <div className="upload_input" >
            	<h4>Manufacturing Date and Time </h4>
    		<input type="text" name="name"  />
            </div>
            <div className="upload_input" >
            	<h4>Expiry Date </h4>
    		<input type="text" name="name"  />
            </div>
            <div className="upload_input" >
            	<h4>Drug Name </h4>
    		<input type="text" name="name"  />
            </div>
            <div className="upload_input" >
            	<h4>Drug Unique No </h4>
    		<input type="text" name="name"  />
            </div>
            <div className="upload_input">
            <h4> Batch No</h4>
    		<input type="text" name="name" />
            </div>		
            <div className="upload_input" >
            	<h4>Aprroved by Drug Administrator (Yes/No)</h4>
    		<input type="text" name="name"  />
            </div>
            <div className="upload_input">
            <h4> Patient Name</h4>
    		<input type="text" name="name" />
            </div>
            <div className="upload_input">
            <h4> Patient Contact No</h4>
    		<input type="text" name="name" />
            </div>
            <div className="upload_input">
            <h4>Billing date & time</h4>
    		<input type="text" name="name"value={getDateTime} />
            </div>
            
			 {fields.map((field, idx) => {
        return (

          <div key={`${field}-${idx}`}>
          <div className="upload_input">
            <h4>Serial No</h4>
    		<input type="text" name="name" />
    		<h4>Quantity </h4>
    		<input type="text" name="name" />
    		<h4>Price </h4>
    		<input type="text" name="name" />
    		 <button className="upload_btn" type="button" onClick={() => handleAdd()}>
       			 +
      		</button>
            </div>
          </div>
        );
      })}
		<Link to="/DmReqSuccessfull">
		<button className="upload_btn3">Upload & Print</button>	
     	</Link>
		</form>	
				</div>
				</div>
			</div>
		</div>
		</div>
	)
}

export default PoBill