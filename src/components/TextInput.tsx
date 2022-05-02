import React, { useContext, useState } from "react";
import useDataStorage from "../share/useDataStorage"
import ErrorMessage from './ErrorMessage'
import { validate } from './dataValidation'
import { FormDef, UpdateSubmitStatusContext, ViewSubmitStatusContext } from './W12MForm'


const FrmInput : React.FC<FormDef> = ({valueID, labelText, inputType, placeHolder}) => {

    const setFormSubmit = useContext(UpdateSubmitStatusContext);
    const [ valueSpecies, setValueSpecies ] = useDataStorage('species', '')
    const [ validateSpecies, setvalidateSpecies ] = useDataStorage('validateSpecies', false)
    const [ valuePlanet, setValuePlanet ] = useDataStorage('planet', '')
    const [ validatePlanet, setvalidatePlanet ] = useDataStorage('validatePlanet', false)   
    const [ valueNoOfBeing, setValueNoOfBeing ] = useDataStorage('noOfBeing', '')
    const [ validateNoOfBeing, setvalidateNoOfBeing ] = useDataStorage('validateNoOfBeing', false)          
    const [ valueRobotCheck, setValueRobotCheck ] = useDataStorage('robotCheck', '')
    const [ validateRobotCheck, setvalidateRobotCheck ] = useDataStorage('validateRobotCheck', false)             
    const [ valueReasonForSparing, setValueReasonForSparing ] = useDataStorage('reasonForSparing', '')  
    const [ validateReasonForSparing, setValidateReasonForSparing ] = useDataStorage('validateReasonForSparing', false)      

    const [ error, setError ] = useState<string>('')
    
    switch(valueID){
        case 'species':
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
                            onBlur={(e) => {
                                const errorMsg = validate(e.target.value, valueID)
                                setValueSpecies(e.target.value)
                                setvalidateSpecies((errorMsg === '') ? true : false)
                                setError(errorMsg);
                            }}
                            onChange={(e) => {
                                const errorMsg = validate(e.target.value, valueID)
                                setValueSpecies(e.target.value)
                                setvalidateSpecies((errorMsg === '') ? true : false)
                                setError(errorMsg);
                            }} />
                    <ErrorMessage errorMessage={error}/>
                </div>
            </>
        )

        case 'planet':
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
                            onBlur={(e) => {
                                const errorMsg = validate(e.target.value, valueID)
                                setvalidatePlanet((errorMsg === '') ? true : false)                                
                                setValuePlanet(e.target.value) 
                                setError(errorMsg);
                            }}
                            onChange={(e) => {
                                const errorMsg = validate(e.target.value, valueID)
                                setvalidatePlanet((errorMsg === '') ? true : false)                                
                                setValuePlanet(e.target.value) 
                                setError(errorMsg);
                            }} />
                    <ErrorMessage errorMessage={error}/>
                </div>
            </>
        )        

        case 'noOfBeing':
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
                            onBlur={(e) => {
                                const errorMsg = validate(e.target.value, valueID)
                                setvalidateNoOfBeing((errorMsg === '') ? true : false)                                 
                                setValueNoOfBeing(e.target.value) 
                                setError(errorMsg)}}
                            onChange={(e) => {
                                const errorMsg = validate(e.target.value, valueID)
                                setvalidateNoOfBeing((errorMsg === '') ? true : false)                                 
                                setValueNoOfBeing(e.target.value) 
                                setError(errorMsg)}} />
                    <ErrorMessage errorMessage={error}/>
                </div>
            </>
        )        

        case 'reasonForSparing':
        return (
            <>    
                <div>
                    <label htmlFor={valueID}>{labelText} : </label> 
                </div>
                <div>
                    <textarea id={valueID} 
                            aria-label={valueID} 
                            placeholder={placeHolder}
                            onBlur={(e) => {
                                const errorMsg = validate(e.target.value, valueID)
                                setValueReasonForSparing(e.target.value)
                                setValidateReasonForSparing((errorMsg === '') ? true : false)     
                                setError(errorMsg);                                
                            }}
                            onChange={(e) => {
                                const errorMsg = validate(e.target.value, valueID)
                                setValueReasonForSparing(e.target.value)
                                setValidateReasonForSparing((errorMsg === '') ? true : false)     
                                setError(errorMsg);                                
                            }}></textarea>
                    <ErrorMessage errorMessage={error}/>                            
                </div>
            </>
        )


        case 'robotCheck':
        return (
            <>    
                <div>
                    <label htmlFor={valueID}>{labelText} : </label> 
                </div>
                <div>
                    <select id={valueID} 
                            aria-label={valueID} 
                            onBlur={(e) => {
                                const errorMsg = validate(e.target.value, valueID)
                                setValueRobotCheck(e.target.value)
                                setvalidateRobotCheck((errorMsg === '') ? true : false) 
                                setError(errorMsg);
                            }}
                            onChange={(e) => {
                                const errorMsg = validate(e.target.value, valueID)
                                setValueRobotCheck(e.target.value)
                                setvalidateRobotCheck((errorMsg === '') ? true : false) 
                                setError(errorMsg);
                            }} >
                        <option value="">?</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <ErrorMessage errorMessage={error}/>
                </div>
            </>
        )

        default: 
            return (<></>)                    
    }
}

export default FrmInput;