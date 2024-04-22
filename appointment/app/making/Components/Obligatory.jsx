import React, { useState } from 'react'

const Obligatory = () => {
    const [gender,setGender] = useState('')
    const [prénom,setPrénom] = useState('')
    const [nom,setNom] = useState('')
    const [prefix,setPrefix] = useState('')
    const [birthDate,setBirthDate] = useState('')
    const [age,setAge] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [secondPhoneNumber,setSecondPhoneNumber] = useState('')
    const [errorMessage,setErrorMessage] = useState('')

    const handleChange = (e) => {
        setPrénom(e.target.value)
    }
    const handleChange2 = (e) => {
        setNom(e.target.value)
    }



    const [genderError,setGenderError] = useState('')
    const [prénomError,setPrénomError] = useState('')
    const [nomError,setNomError] = useState('')
    const [phoneError,setPhoneError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault


        setGenderError('')
        setPrénomError('')
        setNomError('')
        setPhoneError('')
        
        if(!gender) setPrénomError('Veuillez choisir le genre')
        if(!prénom) setPrénomError('Le prénom doit contenir au moins 3 caractères, sans caractères spéciaux')
        if(!nom) setPrénomError('Le nom doit contenir au moins 3 caractères, sans caractères spéciaux')
        if(!phoneNumber) setPrénomError('Le numéro de téléphone est obligatoire')
        
        if (genderError || prénomError || nomError || phoneError){
            return;
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>Genre</label>
                <label htmlFor="male">
                    <input type='radio' id='male' name='gender' value='male' checked={gender ==='male'}onChange={(e)=>setGender('male')}/>
                    M.
                    {genderError && <div>{genderError}</div>}
                </label>
                <label htmlFor="femme">
                    <input type='radio' id='femme' name='gender' value='female' checked={gender ==='female'} onChange={(e)=>setGender('female')}/>
                    Mme.
                    {genderError && <div>{genderError}</div>}
                </label>
                <label htmlFor="prenom" >Prénom</label>
                <input type='text' id='prenom' placeholder='Tapez le prénom du patient' value={prénom} onChange={handleChange} required/>
                {/* {prénomError && <div>{prénomError}</div>} */}
                {'Le prénom doit contenir au moins 3 caractères, sans caractères spéciaux' && <div>{'Le prénom doit contenir au moins 3 caractères, sans caractères spéciaux'}</div>}
                <label htmlFor='nom'>Nom</label>
                <input type='text' id='nom' placeholder='Tapez le nom du patient' value={nom} onChange={handleChange2} required/>
                {nomError && <div>{nomError}</div>}
                <label htmlFor='naissance'>Date de naissance</label>
                <input type='date' id='naissance' placeholder='dd/mm/yy' value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} />
                <label htmlFor='age'>Age</label>
                <input type='number' id='age' placeholder='Ajouter l age' value={age} onChange={(e)=>{setAge(e.target.value)}} />
                <label htmlFor='Numéro de téléphone' >Numéro de téléphone</label>
                <input data-testid="phones" id='Numéro de téléphone' placeholder="phone number" type="tel" required/>
                <div>
                    <select id='prefix' value={prefix} onChange={(e)=>setPrefix(e.target.value)} required>
                        <option value={+216}>+216 (TN)</option>
                        <option value={+1}>+1 (US)</option>
                    </select>
                    <input data-testid='phone' type='tel' id='phoneNumber' value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} placeholder='phone number' required/>
                    {phoneError && <div>{phoneError}</div>}
                    <input data-testid='phone1' type='tel' id='secondPhoneNumber' value={secondPhoneNumber} onChange={(e)=> setSecondPhoneNumber(e.target.value)} placeholder='phone number' required/>
              </div>
              <button type='submit'>Suivant</button>
              <button>Annuler</button>
            </form>
        </div>
    )

}
export default Obligatory