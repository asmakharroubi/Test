import React from 'react';
import {fireEvent, getByTestId, getByText, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Obligatory from '../Components/Obligatory'

test('gender selection',()=>{
    render(<Obligatory/>)
    const firstRadio = screen.getByLabelText('M.')
    const secondRadio = screen.getByLabelText('Mme.')
    const firstClick = fireEvent.click(firstRadio)
    expect (firstRadio).toBeChecked
    expect(secondRadio).not.toBeChecked
    
    const secondClick = fireEvent.click(secondRadio)
    expect(secondClick).toBeChecked
    expect(firstClick).not.toBeChecked

})
test('insert name', ()=>{
    render(<Obligatory/>)
    const statement1 = screen.getByText('Prénom')
    const statement = screen.getByLabelText('Prénom')
    const statement2 = screen.getByText('Nom')
    const placeHolder1 = screen.getByPlaceholderText('Tapez le prénom du patient')
    const placeHolder2 = screen.getByPlaceholderText('Tapez le prénom du patient')
    expect(statement1).toBeInTheDocument
    expect(statement2).toBeInTheDocument
    expect(placeHolder1).toBeInTheDocument
    expect(placeHolder2).toBeInTheDocument
    expect(statement1).toHaveValue
    expect(statement1).toHaveDisplayValue        
    })

    test('input fields allow user input', ()=>{
        render(<Obligatory/>)
        const statement1 = screen.getByLabelText('Prénom')
        const statementInput = fireEvent.change(statement1, {target:{value:'Asma'}})
        expect(statementInput.value).toBe
        const statement2 = screen.getByLabelText('Nom')
        const statementInput2 = fireEvent.change(statement2, {target:{value:'kharroubi'}})
        expect(statementInput2.value).toBe
        const statement3 = screen.getByLabelText('Date de naissance')
        fireEvent.change(statement3, {target:{value:'02-01-1997'}})
        expect(statement3.value).toBe
        const statement4 = screen.getByLabelText('Age')
        fireEvent.change(statement4, {target:{value:'271'}})
        expect(statement4.value).toBe
        const statement5 = screen.getByTestId('phone')
        fireEvent.change(statement5, {target:{value:'11222333cfb'}})
        expect(statement5.value).toBe
        const statement50 = screen.getByTestId('phone1')
        fireEvent.change(statement50, {target:{value:'11222333'}})
        expect(statement50.value).toBe

    })
    test('submit button is clickable',()=>{
        render(<Obligatory/>)
        const submitButton = screen.getByText('Suivant')
        expect(submitButton).toBeEnabled
        fireEvent.click(submitButton)

    })
    test('form submission does not occur if required fields are empty', () => {
        render(<Obligatory/>)
        const submitButton = screen.getByText('Suivant')
        fireEvent.click(submitButton)
        const mockSubmit = jest.fn()
        jest.spyOn(React,'useState').mockReturnValueOnce(['',mockSubmit])
        expect(mockSubmit).not.toHaveBeenCalled
    })

    test('Multiple phone number inputs', ()=>{
        render(<Obligatory/>)
        const phoneNumberInput = screen.getByTestId('phone')
        const secondPhoneNumberInput = screen.getByTestId('phone1')
        fireEvent.change(phoneNumberInput, {target:{value:'22555999'}})
        fireEvent.change(secondPhoneNumberInput, {target:{value:'334444888'}})
        expect(phoneNumberInput.value).toBe('22555999')
        expect(secondPhoneNumberInput.value).toBe('334444888')
    })

    test('prefix selection updates state',()=>{
        render(<Obligatory/>)
        const prefixSelect = screen.getByLabelText('Numéro de téléphone')
        fireEvent.change(prefixSelect, {target:{value: '+1'}})
        expect(prefixSelect.value).toBe('+1')
    })


