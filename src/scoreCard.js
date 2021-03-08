import React from 'react';
import Box from '@material-ui/core/Box';
import './style.css';

const ScoreCard = (props) => {

	// score による risk の分岐
	var risk = "Low"
	var riskPercentage = "0.5%"

	if (props.score <= 3){
		risk = "Low"
		riskPercentage = "0.5%"
	} else if (props.score >= 9){
		risk = "High"
		riskPercentage = "5.9%"
	} else {
		risk = "Medium"
		riskPercentage = "2.3%"
	}

	return (
		<div>
			<h3> Risk of Stroke or Carotid Revascularization in 7 days</h3>
			<div className={ risk }>
				<Box p={2}>
					<h3>■ Total Score = {props.score}</h3>
					<h3>■ Risk : {risk} Risk ({riskPercentage})</h3>
				</Box>
			</div>
		</div>
	);
};

export default ScoreCard;
