
import React, { useState } from "react";


const Makingapointment = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  const [selectedDate, setSelectedDate] = useState('<Date | null>(null)');

  const [selectedTime, setSelectedTime] = useState('');
  
  const handleDateChange = (event) => {
  const date = new Date(event.target.value);
    setSelectedDate(date);
  };
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
 };
        
  const handleSubmitDate = (event) => {
    event.preventDefault();
      if (selectedDate && selectedTime) {
        console.log('Appointment Date:', selectedDate.toDateString());
        console.log('Appointment Time:', selectedTime);
      } else {
        alert('Please select a date and time for your appointment.');
      }};
      const [isListOpen, setIsListOpen] = useState(false);
      const [selectedPatient, setSelectedPatient] = useState('');

      const Patients = ['Patient 1', 'Patient 2', 'Patient 3'];

      const handleButtonClick = () => {
       setIsListOpen(!isListOpen);
      };

     const handleOptionClick = (Patient) => {
       setSelectedPatient(Patient);
       setIsListOpen(false);
     };
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <title>Ajout rapide d un rendez-vous</title>
                    <h1>Type de créneau horaire : </h1>
                    <input type="text" id="créneau-input" name="créneau-input" readOnly/>
                    <select id="créneau" name="créneau">
                        <option value="option1">Consultaion</option>
                        <option value="option2">Controle</option>
                        <option value="option3">Consultation + act</option>
                    </select>
                    <h1>Réservez un créneau horaire : </h1>
                    <label>Durée de consultation</label>
                    <input type="text" id="durée-input" data-testid="durée-input"name="durée-input" readOnly/>
                    <select id="durée" name="durée">
                        <option value="option1">15 minutes</option>
                        <option value="option2">20 minutes</option>
                        <option value="option3">25 minutes</option>
                    </select>
                    <label>Motif </label>
                    <input data-testid="motif" type="text" id="motif-input" name="motif-input" readOnly/>
                    <select id="motif" name="motif">
                        <option value="option1">Fibro</option>
                        <option value="option2">détartrage</option>
                        <option value="option3">apnée de sommeil</option>
                    </select>
                    <h2>Veuillez choisir les dates du RDV </h2>
        <input type="date" id="date" name="date" data-testid="date" onChange={handleDateChange} />

      <div>
      {selectedDate && (
       <div>
          <h3  >Agenda for {selectedDate}.toDateString()</h3>

          <div>
          <h2>Veuillez choisir l heure du RDV :  </h2>
            <select data-testid="time" id="time" name="time" onChange={handleTimeChange}>
              <option value="09:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              
            </select>
            </div>
            </div>
      )}
    </div>
    <h1>Choisissez le patient </h1>
                    <label>Vous devez ajouter un patient </label>
                   

                    <button onClick={handleButtonClick} data-testid="add">+</button>
      {isListOpen && (
        <ul >
          {Patients.map((Patient, index) => (
            <li key={index} onClick={() => handleOptionClick(Patient)}>
              {Patient}
            </li>
          ))}
        </ul>
      )}
      <p data-testid="selectedPatient"> {selectedPatient}</p>
                    <button>Annuler</button>
                    <button data-testid='submit'type="submit">Enregistrer</button>
                    
                </form>
            </div>
        );
};

export default Makingapointment
