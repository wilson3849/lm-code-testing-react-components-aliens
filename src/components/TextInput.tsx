import React, { useContext, useState } from "react";
import useDataStorage from "../share/useDataStorage"
import ErrorMessage from './ErrorMessage'
import { validate } from './dataValidation'
import { UpdateSubmitStatusContext } from './W12MForm'

interface frmBlockParaProp {
    valueID: string;
    labelText: string;
    inputType: string;
    errorMessageID: string;
    placeHolder: string;
    validEvent: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FrmInput : React.FC<frmBlockParaProp> = ({valueID, labelText, inputType, errorMessageID, placeHolder, validEvent}) => {

    const setFormSubmit = useContext(UpdateSubmitStatusContext);
    const [ value, setValue ] = useDataStorage(valueID, '')
    const [ error, setError ] = useDataStorage(errorMessageID, '')

    switch(inputType){
        case 'input':
        return (
            <>    
                <div>
                    <label htmlFor={valueID}>{labelText} : </label> 
                </div>
                <div>
                    <input id={valueID} 
                            aria-label={valueID} 
                            placeholder={placeHolder}
                            type='text'
                            value={value}
                            onChange={(e) => {
                                const errorMsg = validate(e.target.value, valueID)
                                if (setFormSubmit != null){
                                    setFormSubmit(((errorMsg === undefined) ? false : true));}
                                    setError(errorMsg);
                                validEvent(e);
                            }} />
                    <ErrorMessage errorMessage={error}/>
                </div>
            </>
        )

        case 'select':
        return (
            <>    
                <div>
                    <label htmlFor={valueID}>{labelText} : </label> 
                </div>
                <div>
                    <input id={valueID} 
                            aria-label={valueID} 
                            placeholder={placeHolder}
                            type='text'
                            value={value}
                            onChange={(e) => {
                                const errorMsg = validate(e.target.value, valueID)
                                if (setFormSubmit != null){
                                    setFormSubmit(((errorMsg === undefined) ? false : true));}
                                    setError(errorMsg);
                                validEvent(e);
                            }} />
                    <ErrorMessage errorMessage={error}/>
                </div>
            </>
        )

        default: 
            return (<></>)                    
    }
}

export default FrmInput;