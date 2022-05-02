import { validate } from './dataValidation'

describe("test validatte function", () => {

    it.each([
        ['', 'species', 'species name cannot be blank.'], 
        ['', 'planet', 'Planet name cannot be blank.'], 
        ['', 'noOfBeing', 'Number of being cannot be blank.'],     
        ['', 'robotCheck', 'Correct answer must be provided.'],     
        ['', 'reasonForSparing', 'Reason for sparing cannot be blank.'],     
    ]
    )
    ('test input data with empty input', (input, fieldID, expected) => {
        expect(validate(input, fieldID)).toBe(expected);
    });

    it.each([
        ['aa', 'noOfBeing', 'Number of being must input a number.'],     
    ]
    )
    ('test input data with invalid numeric input', (input, fieldID, expected) => {
        expect(validate(input, fieldID)).toBe(expected);
    });

    it.each([
        ['any', 'species', ''], 
        ['any', 'planet', ''], 
        ['1', 'noOfBeing', ''],     
        ['4', 'robotCheck', ''],     
        ['any', 'reasonForSparing', ''],     
    ]
    )
    ('test input data with correct input', (input, fieldID, expected) => {
        expect(validate(input, fieldID)).toBe(expected);
    });
});