import React,{useState} from 'react'
import "./Upload.css";
import {Link} from 'react-router-dom';


function DmRequest() {
	const getDateTime= new Date().toLocaleString('en-IN');
	const [fields, setFields] = useState([{ value: null }]);
	const [rnum,setrnum]=useState("000000");

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
  const generateRNUM=()=>{
  	const num=Math.floor((Math.random()*1000000)+1);
  	setrnum(num);
  }

	return (
		<div className="uploadDetails">
			<div className="details_form">
			<div className="details_heading">
			<h1>Request Raw Materials</h1>
		</div>
		<div className="DmRequest">
			<div className="uploadForm">
			<form className="upload_form_layout"> 
			<div className="upload_input">
            <h4> Manufacturer Name</h4>
    		<input type="text" name="name" />
            </div>
            <div className="upload_input" >
            	<h4>License No </h4>
    		<input type="text" name="name"  />
            </div>
            <div className="upload_input" >
            	<h4>Raw Material Supplier Name </h4>
    		<input type="text" name="name"  />
            </div>
            <div className="upload_input" >
            	<h4>Date and Time </h4>
    		<input type="text" name="name" value={getDateTime} />
            </div>
            <div className="upload_input" >
            	<h4>Drug Name </h4>
    		<input type="text" name="name"  />
            </div>
            <div className="upload_input" >
            	<h4>Drug Unique No </h4>
    		<input type="text" name="name" value={rnum} />
            </div>
            <button className="upload_btn1" type="button" onClick={generateRNUM}>Generate</button>	
			 {fields.map((field, idx) => {
        return (

          <div key={`${field}-${idx}`}>
          <div className="upload_input">
            <h4> Name </h4>
    		<input type="text" name="name" />
    		<h4>Quantity </h4>
    		<input type="text" name="name" />
    		 <button className="upload_btn" type="button" onClick={() => handleAdd()}>
       			 +
      		</button>
            </div>
          </div>
        );
      })}
		<Link to="/DmReqSuccessfull">
		<button className="upload_btn1">Request</button>	
     	</Link>
		</form>	
				</div>
				</div>
			</div>
		</div>
	)
}

export default DmRequest