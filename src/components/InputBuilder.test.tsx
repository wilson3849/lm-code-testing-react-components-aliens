import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChangeEvent } from 'react';
import FrmInput from './InputBuilder';

describe('Test each input element building.', () => {
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

    test('renders species input', () => {
        render(<FrmInput 
                    valueID={formMasterDatas[0].valueID}
                    labelText={formMasterDatas[0].labelText}
                    placeHolder={formMasterDatas[0].placeHolder} />);
        const HTMLbody = screen.getByLabelText('species',{exact : false});
        expect(HTMLbody).toBeInTheDocument();
    });

    test('renders planet input', () => {
        render(<FrmInput 
                    valueID={formMasterDatas[1].valueID}
                    labelText={formMasterDatas[1].labelText}
                    placeHolder={formMasterDatas[1].placeHolder} />);
        const HTMLbody = screen.getByLabelText('planet',{exact : false});
        expect(HTMLbody).toBeInTheDocument();
    });

    test('renders robotCheck input', () => {
        render(<FrmInput 
                    valueID={formMasterDatas[3].valueID}
                    labelText={formMasterDatas[3].labelText}
                    placeHolder={formMasterDatas[3].placeHolder} />);
        const HTMLbody = screen.getByLabelText('robotCheck',{exact : false});
        expect(HTMLbody).toBeInTheDocument();
    });

    test('renders reasonForSparing input', () => {
        render(<FrmInput 
                    valueID={formMasterDatas[4].valueID}
                    labelText={formMasterDatas[4].labelText}
                    placeHolder={formMasterDatas[4].placeHolder} />);
        const HTMLbody = screen.getByLabelText('reasonForSparing',{exact : false});
        expect(HTMLbody).toBeInTheDocument();
    });

    test('renders noOfBeing input', () => {
        render(<FrmInput 
                    valueID={formMasterDatas[2].valueID}
                    labelText={formMasterDatas[2].labelText}
                    placeHolder={formMasterDatas[2].placeHolder} />);
        const HTMLbody = screen.getByLabelText('noOfBeing',{exact : false});
        expect(HTMLbody).toBeInTheDocument();
    });
});