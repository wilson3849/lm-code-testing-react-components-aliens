export const validate:(value:string, fieldID:string) => string | string = (value, fieldID) => {



    switch (fieldID) {
        
        case "species":
            if (value.trim().length === 0) 
                return ('species name cannot be blank.')
            return ''

        case "planet":
            if (value.trim().length === 0) 
                return ('Planet name cannot be blank.')
            return ''

        case "noOfBeing":
            if (value.trim().length === 0) 
                return ('Number of being cannot be blank.')
            if (!/^\d+$/.test(value))
                return ('Number of being must input a number.') 
            return '' 

        case "robotCheck":
            if (value !== '4')
            return ('Number of being cannot be blank.')
            return ''

        case "reasonForSparing":
            if (value.trim().length === 0) 
                return ('Reason for sparing cannot be blank.')
            return ''             

        default:
            return ''
    }
}