import React from 'react'
import "./Home.css"


function Home() {
	return (
		<div className="home">
		<div className="drug">
		<div className="drug_heading">
			<h1>Verify your Medicine</h1>
			<p>(*Please enter the 12 digit unique identification number on your repestive medicine bill.)</p>
		</div>
			<div className="drug-search">
				<input className="drug-searchinput" type="text" />
				<button className="btn_verify">Verify</button>
			</div>
			<p className="drug_des"><span>Note: </span>Consumer can verify the quality, genuiness, production date, expire date of the drug and can verify whether the drug is manufactured by the goverment approved Manufacture. </p>
		</div>
		<div className="report">
			<div className="drug_heading">
			<h1>Report your Medicine</h1>
			<p>(*Please enter the 12 digit unique identification number on your repestive medicine bill.)</p>
		</div>
		<div className="drug-search">
				<input className="drug-searchinput" type="text" />
				<button className="btn_verify">Report</button>
			</div>
			<p className="drug_des"><span>Note: </span>Consumer can report the drug with only with lab test reports of the drug and patient who developed negative symptom and it should be certified and signed by the concern doctor. </p>
		</div>
		

			
		</div>
	)
}

export default Home
