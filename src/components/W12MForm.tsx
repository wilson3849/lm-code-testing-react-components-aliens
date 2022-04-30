import React, { useState } from 'react';
import W12MHeader from './W12MHeader';

export const UpdateSubmitStatusContext  = React.createContext<null | React.Dispatch<React.SetStateAction<boolean>>>(null);

const W12MForm = () => {

	const [formSubmit, setFormSubmit] = useState<boolean>(true);

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<UpdateSubmitStatusContext.Provider value={setFormSubmit}>
			{/* REST OF FORM GOES HERE */}
			</UpdateSubmitStatusContext.Provider>
		</section>
	);
};

export default W12MForm;
