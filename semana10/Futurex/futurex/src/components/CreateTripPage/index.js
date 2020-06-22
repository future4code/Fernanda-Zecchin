import React, { useEffect , useState} from 'react'
import {useHistory} from 'react-router-dom';
import {useForm} from '../HooksForms/useForms'
import {FormAdmin} from './style'
import axios from 'axios'

function CreateTripPage(props) {
  const submitForm = () => {
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda/trips`,
  form,
   {
     headers: {'auth' : localStorage.getItem('token')}
   })
   .then(response => {
   window.alert(`Viagem ${response.data.trip.name} criada com sucesso` )
   resetForm()
   })
   .catch(err => {
     console.log('Create ', err)
   });
  };

  

  const {form, onChange, resetForm} = useForm({
      name:"",
      planet: "",
      date:"",
      description:"",
      durationInDays:"",
  });
    
   const handleInputChange = event => {
     const {value, name} = event.target;

     onChange(name, value);
   };

   const handleSubmit = event => {
     event.preventDefault();
   };
   
   const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/")
    }
  },[history]);
 
  
    return (
    <div>
     <FormAdmin onSubmit={handleSubmit}>
       <h2>Criar Viagem</h2>
       <input
       name="name"
       type="text"
       value={form.name}
       onChange={handleInputChange}
       placeholder="Nome"
       required
      />

      <select name="planet" value={form.planet} onChange={handleInputChange} type="text" required>
        <option >Escolha o planeta</option>
        <option>Mercúrio</option>
        <option>Vênus</option>
        <option>Terra</option>
        <option>Marte</option>
        <option>Júpiter</option>
        <option>Saturno</option>
        <option>Urano</option>
        <option>Netuno</option>
        {/* {
          planet.map((planet, i) => {
            return (
            <option key={i} value={planet}>{planet}</option>
            )
          })
        } */}
      </select>

      <input
      type="date"
      name="date"
      value={form.date}
      onChange={handleInputChange}
      required
      />

      <input
       type="text"
       name="description"
       value={form.description}
       onChange={handleInputChange}
       placeholder="Descrição da viagem"
       min="30"
       required
      />
      
      <input
       type="number"
       name="durationInDays"
       value={form.durationInDays}
       onChange={handleInputChange}
       placeholder="Duração da viagem"
       required
      />
      
      <button onClick={resetForm}>Limpar</button>
      <button type="submit" onClick={submitForm}>Enviar</button>
     </FormAdmin>
    </div>
  )
}

export default CreateTripPage;
