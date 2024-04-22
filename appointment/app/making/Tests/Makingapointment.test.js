import React from 'react';
import {fireEvent, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Makingapointment from '../Components/Makingapointment'



describe('Slot part',() =>{
    // test('selectionner le type de créneau', ()=>{
        test('slot type selection', ()=>{
        render(<Makingapointment/>);
        const statement5 = screen.getByText('Ajout rapide d un rendez-vous')
        const statement4 = screen.getByText('Type de créneau horaire :')
        expect(statement5).toBeInTheDocument
        expect(statement4).toBeInTheDocument
        expect(statement4).toHaveValue
        expect(statement4).toHaveDisplayValue        
    })
    test('slot reservation',()=>{
        render(<Makingapointment/>)
        const res1 = screen.getByText('Durée de consultation')
        expect(res1).toBeInTheDocument
        expect(res1).toHaveValue
        expect(res1).toHaveDisplayValue
        const res2 = screen.getByText('Motif')
        expect(res2).toBeInTheDocument
        const res3 = screen.getByTestId('motif')
        const motifExample = fireEvent.change(res3, {target : {value : 'option1'}})
        expect(motifExample).toHaveDisplayValue      


    })
    
})
describe('date and time testing',()=>{
    test("rendering the making appointment component" , () => {
        render(<Makingapointment/>);
        const statement= screen.getByText('Ajout rapide d un rendez-vous')
        expect(statement).toBeInTheDocument();     
    })

    test("selecting a date and time", () => {
        render(<Makingapointment/>);
        const statement2 = screen.getByText("Veuillez choisir les dates du RDV")
        const dateExample = screen.getByTestId('date')
        const dateValue = fireEvent.change(dateExample, {target : {value : '18-04-2024'}})
        expect (statement2).toBeInTheDocument
           
        expect(dateValue.value).toBe;

    })

    test("choose a time", () => {
        render(<Makingapointment/>);
        const statement3 = screen.getByText('Veuillez choisir l heure du RDV :')
        const timeExample = screen.getByTestId('time')
        const timeValue = fireEvent.change(timeExample, { target: { value: '10:00 AM' } });
        expect(statement3).toBeInTheDocument
        expect(timeValue).toBe
    })

})

describe('Selecting patient part', () => {
    test('selecting a patient', () => {
        render(<Makingapointment/>)
        const choosePatient = screen.getByTestId('add')
        const select = fireEvent.click(choosePatient) 
        const patient1 = screen.getByTestId('add')
        expect(patient1).toBeInTheDocument 
        fireEvent.click(patient1)
        const selectedPatient = screen.getByTestId('selectedPatient')
        expect('selectedPatient').toBeInTheDocument  
    })

})

test('submitting Form', ()=> {
    const handleSubmit = jest.fn()
    render(<Makingapointment/>)
    const dateExample = screen.getByTestId('date')
    const dateValue = fireEvent.change(dateExample, {target : {value : '18-04-2024'}})
    // expect (statement2).toBeInTheDocument
    const timeExample = screen.getByTestId('time')
    const timeValue = fireEvent.change(timeExample, { target: { value: '10:00 AM' } });
    
    const submitButton = screen.getByTestId('submit')
    const clicking = fireEvent.click(submitButton)

    const result1 = expect.objectContaining({
        date : new Date ('18-04-2024'),
        time : '10:00'
    })
    // expect(handleSubmit).toHaveBeenCalled(result1)
    expect(handleSubmit).toHaveBeenCalled
})


describe('time section appears after selecting a date ',()=>{
    test('time is initianlly hidden',()=>{
        render(<Makingapointment/>)
        const timeSection = screen.getByTestId('time')
        expect(time).not.toBeVisible
    })
    test('Time section appears after selecting a date',()=>{
        render(<Makingapointment/>)
        const date = screen.getByTestId('date')
        fireEvent.change (date,{target:{value:'22-04-2024'}})
        const timeSection = screen.getAllByTestId('time')
        expect(timeSection).toBeVisible
    })
})
