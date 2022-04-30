export interface ErrorMessageProps { 
	errorMessage: string | undefined;
}

const ErrorMessage : React.FC<ErrorMessageProps> = ({errorMessage}) =>  {

    return(
    <>  
        <div>
            <label htmlFor='error'>{errorMessage}</label>
        </div>
    </>)
}
export default ErrorMessage;