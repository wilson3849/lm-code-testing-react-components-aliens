import React, { useState } from 'react';
import W12MHeader from './W12MHeader';
import FrmInput from './InputBuilder'
import { getSavedValue } from "../share/useDataStorage"
import './W12MForm.css';

export const UpdateSubmitStatusContext  = React.createContext<null | React.Dispatch<React.SetStateAction<boolean>>>(null);
export const ViewSubmitStatusContext = React.createContext<boolean>(true);

export interface FormDef {
    valueID: string;
    labelText: string;
    placeHolder: string;	
}

const W12MForm = () => {

	const formMasterDatas = [
		{
			valueID: 'species',
			labelText: 'Species Name',
			placeHolder: 'enter species name'
		},
		{
			valueID: 'planet',
			labelText: 'Planet Name',
			placeHolder: 'enter planet name'
		},
		{
			valueID: 'noOfBeing',
			labelText: 'Number of beings',
			placeHolder: 'input number of being'
		},
		{
			valueID: 'robotCheck',
			labelText: 'What is 2 + 2',
			placeHolder: ''
		},		
		{
			valueID: 'reasonForSparing',
			labelText: 'Reason for sparing',
			placeHolder: 'enter reason for sparing'
		}		
	]
	const [ response, setResponse ] = useState<string>('');

	function submitForm() {

		const confirmSubmit = (getSavedValue('validSpecies', '') &&
								getSavedValue('validatePlanet', '') &&
								getSavedValue('validateNoOfBeing', '') &&
								getSavedValue('validateRobotCheck', '') &&
								getSavedValue('validateReasonForSparing', ''))
		const confirmMessage = (`{
		${getSavedValue('species', '')}, 
		${getSavedValue('planet', '')}, 
		${getSavedValue('noOfBeing', '')}, 
		${getSavedValue('robotCheck', '')},
		${getSavedValue('reasonForSparing', '')} }`)

		setResponse(confirmSubmit ? `Your application for (${getSavedValue('species', '')}) is submitted. ${confirmMessage}`  : 'Your information is incompleted, Please check and submit again.')

		return;
	}

	return (
		<section className='w12MForm'>
			<div>
			<W12MHeader />
			</div>
			<div>
				Application Form
			</div>				
			<div className='SubmitForm'>
				<div>
				{	formMasterDatas.map((formMasterData)	=> (	
					<FrmInput valueID={formMasterData.valueID}
								labelText={formMasterData.labelText}
								placeHolder={formMasterData.placeHolder} />
					))}
				</div>
				<div>
				{response}
				</div>
				<div>
					<button className="w12MForm-submit-button" onClick={submitForm}>Submit</button>
				</div>
			</div>
		</section>
	);
};

export default W12MForm;
