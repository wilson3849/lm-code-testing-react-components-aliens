import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders form title', () => {
	render(<App />);
	const formTitle = screen.getByText(
		/W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION/i
	);
	expect(formTitle).toBeInTheDocument();
});

/*
test('renders species input', () => {
	render(<App />);
	const HTMLbody = screen.getByLabelText('species',{exact : false});
	expect(HTMLbody).toBeInTheDocument();
});
*/

it.each([
	['species'], 
	['planet'], 
	['noOfBeing'],     
	['robotCheck'],     
	['reasonForSparing'],     
])
('test user input', (fieldID) => {
	render(<App />);
	const HTMLbody = screen.getByLabelText(fieldID);
	expect(HTMLbody).toBeInTheDocument();
});


it.each([
	['species'], 
	['planet'], 
	['noOfBeing'],     
	['robotCheck'],     
	['reasonForSparing'],     
])
('test user input', (fieldID) => {
	render(<App />);
	const HTMLbody = screen.getByLabelText(fieldID);
	expect(HTMLbody).toBeInTheDocument();
});


describe('W12Form incorrect input with user alert', () => {

	test('keyin to empty user input in Species Name', () => {

		render(<App />);

		const inputElement = screen.getByLabelText('species');
		expect(inputElement).toBeInTheDocument();
		
		inputElement.focus()
		userEvent.type(inputElement, '')
		userEvent.tab()

		const systemMessage = screen.getByText('species name cannot be blank.');
		expect(systemMessage).toBeInTheDocument();

    })

	test('keyin to empty user input in Planet Name', () => {

		render(<App />);

		const inputElement = screen.getByLabelText('planet');
		expect(inputElement).toBeInTheDocument();
		
		inputElement.focus()
		userEvent.type(inputElement, '')
		userEvent.tab()

		const systemMessage = screen.getByText('Planet name cannot be blank.');
		expect(systemMessage).toBeInTheDocument();

    })

	test('keyin to empty user input in Number of being', () => {

		render(<App />);

		const inputElement = screen.getByLabelText('noOfBeing');
		expect(inputElement).toBeInTheDocument();
		
		inputElement.focus()
		userEvent.type(inputElement, '')
		userEvent.tab()

		const systemMessage = screen.getByText('Number of being cannot be blank.');
		expect(systemMessage).toBeInTheDocument();

    })

	test('keyin to empty user input in robotCheck', () => {

		render(<App />);

		const inputElement = screen.getByLabelText('robotCheck');
		expect(inputElement).toBeInTheDocument();
		
		inputElement.focus()
		userEvent.selectOptions(inputElement, [""], { bubbles: true });
		userEvent.tab()

		const systemMessage = screen.getByText('Correct answer must be provided.');
		expect(systemMessage).toBeInTheDocument();

    })	

	test('keyin to empty user input in reason For Sparing', () => {

		render(<App />);

		const inputElement = screen.getByLabelText('reasonForSparing');
		expect(inputElement).toBeInTheDocument();
		
		inputElement.focus()
		userEvent.type(inputElement, '')
		userEvent.tab()

		const systemMessage = screen.getByText('Reason for sparing cannot be blank.');
		expect(systemMessage).toBeInTheDocument();

    })		


	test('keyin to alpha user input in reason For Sparing', () => {

		render(<App />);

		const inputElement = screen.getByLabelText('noOfBeing');
		expect(inputElement).toBeInTheDocument();
		
		inputElement.focus()
		userEvent.type(inputElement, 'a')
		userEvent.tab()

		const systemMessage = screen.getByText('Number of being must input a number.');
		expect(systemMessage).toBeInTheDocument();
    })
	
	/*
	it.each([
		['', 'species', 'species name cannot be blank.'], 
		['', 'planet', 'Planet name cannot be blank.'], 
		['', 'noOfBeing', 'Number of being cannot be blank.'],     
		['', 'robotCheck', 'Correct answer must be provided.'],     
		['', 'reasonForSparing', 'Reason for sparing cannot be blank.'],         
	])
	('check incorrect user alert', async (input, fieldID, expected) => {
		const inputElement = screen.getByText(expected);
		expect(inputElement).toBeInTheDocument();
	});
	*/
})

describe('test form fail in submission', () => {

	test('all empty user input', () => {

		render(<App />);

		const submitButton = screen.getByText('Submit');
		expect(submitButton).toBeInTheDocument();
		
		userEvent.click(submitButton)

		const systemMessage = screen.getByText('Your information is incompleted', {exact : false});
		expect(systemMessage).toBeInTheDocument();

    })
})


describe('test form success in submission', () => {

	test('all empty user input', () => {

		render(<App />);

		const inputElement1 = screen.getByLabelText('species');
		expect(inputElement1).toBeInTheDocument();
		
		inputElement1.focus()
		userEvent.type(inputElement1, 'myspecies')

		const inputElement2 = screen.getByLabelText('planet');
		expect(inputElement2).toBeInTheDocument();
		
		inputElement2.focus()
		userEvent.type(inputElement2, 'myplanet')

		const inputElement3 = screen.getByLabelText('noOfBeing');
		expect(inputElement3).toBeInTheDocument();
		
		inputElement2.focus()
		userEvent.type(inputElement3, '3')

		const inputElement = screen.getByLabelText('robotCheck');
		expect(inputElement).toBeInTheDocument();
		
		inputElement.focus()
		userEvent.selectOptions(inputElement, ["4"], { bubbles: true });

		const inputElement5 = screen.getByLabelText('reasonForSparing');
		expect(inputElement5).toBeInTheDocument();
		
		inputElement5.focus()
		userEvent.type(inputElement5, 'My Reason')		

		const submitButton = screen.getByText('Submit');
		expect(submitButton).toBeInTheDocument();
		
		userEvent.click(submitButton)

		const systemMessage = screen.getByText('Your application for (myspecies) is submitted.', {exact : false});
		expect(systemMessage).toBeInTheDocument();

    })
})