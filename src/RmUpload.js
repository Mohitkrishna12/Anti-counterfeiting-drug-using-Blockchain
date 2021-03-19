import React,{useState} from 'react'
import "./RmUpload.css";


function RmUpload() {
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
		<div className="RmUpload">
			<div className="uploadForm">
			<form className="upload_form_layout">
		<div className="upload_input"> 
			<h4> Name </h4>
    		<input type="text" name="name" />
    		<h4>Quantity </h4>
    		<input type="text" name="name" />
    		 <button type="button" onClick={() => handleAdd()}>
        +
      </button>
		</div>
		<div className="upload_input"> 
			 {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Enter text"
              onChange={e => handleChange(idx, e)}
            />
            
          </div>
        );
      })}
		</div>
		
     
		</form>	
				
			</div>
		</div>
	)
}

export default RmUpload