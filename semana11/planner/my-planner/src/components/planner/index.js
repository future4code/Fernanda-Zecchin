import React, {useState, useEffect} from "react";
import {ContainerCriarTarefa, ContainerDiasDaSemana, Semana} from "./style";
import axios from 'axios';



 function Planner() {
   const[inputTarefa, setInputTarefa] = useState('');
   const[selecionaSemana, setSelecionaSemana] = useState('');
   const[listaTarefas, setListaTarefas] = useState([]);
   
   const buscarListaTarefas = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-fernanda-zecchin').then((response) => {
     setListaTarefas(response.data)
    })
   }

   useEffect(() => {
    buscarListaTarefas()

    }, [])

      
   const onChangeInputTarefa = event => {
    setInputTarefa(event.target.value);
   };
   
   const onChangeSelecionaSemana = event => {
    setSelecionaSemana(event.target.value);
   };

   const adicionarTarefa = () => {
     const body = {
       text:inputTarefa,
       day: selecionaSemana
     }
     axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-fernanda-zecchin', body,
     {
       headers: {aluno: 'planner-julian-fernanda-zecchin',
      }
     }).then((response) => {
       console.log(response.data)
     }).catch((error) => {
       console.log(error)
     })
     buscarListaTarefas()
   }
  
  
  //  const renderizaTarefa = listaTarefas.filter((tarefa) => {
  //    return tarefa.day === titulo
  //  }).map((tarefa,index) => {
  //    return <ContainerDiasDaSemana id={tarefa.id} key={index}/>
  //  })
  
 
  
 

 

  return (
    <div>
      <ContainerCriarTarefa>
        <input
          type="text"
          placeholder="adicione sua tarefa"
          value={inputTarefa}
          onChange={onChangeInputTarefa}
        />

          <select value={selecionaSemana} onChange={onChangeSelecionaSemana}>
            <option value=""></option>
            <option value={'Segunda'}>Segunda</option>
            <option value={"Terca"}>Terça</option>
            <option value={"Quarta"}>Quarta</option>
            <option value={"Quinta"}>Quinta</option>
            <option value={"Sexta"}>Sexta</option>
            <option value={"Sabado"}>Sábado</option>
            <option value={"Domingo"}>Domingo</option>
          </select>

          <button onClick={adicionarTarefa} data-testid={'botao-adicionar'}>Criar Tarefa</button>

      </ContainerCriarTarefa>

      <ContainerDiasDaSemana>  

            <Semana>
              <h4>Domingo</h4>
              {listaTarefas.filter(tarefa => tarefa.day === "Domingo").map(filteredTarefa => (
               <p>
                 {filteredTarefa.text}
               </p>
             ))}
            </Semana>
        
       
            <Semana>
             <h4>Segunda</h4> 
             {listaTarefas.filter(tarefa => tarefa.day === "Segunda").map(filteredTarefa => (
               <p>
                 {filteredTarefa.text}
               </p>
             ))}
            </Semana>

            <Semana>
              <h4>Terça</h4>
              {listaTarefas.filter(tarefa => tarefa.day === "Terça").map(filteredTarefa => (
               <p>
                 {filteredTarefa.text}
               </p>
             ))}
            </Semana>

            <Semana>
              <h4>Quarta</h4>
              {listaTarefas.filter(tarefa => tarefa.day === "Quarta").map(filteredTarefa => (
               <p>
                 {filteredTarefa.text}
               </p>
             ))}
            </Semana>

            <Semana>
              <h4>Quinta</h4>
              {listaTarefas.filter(tarefa => tarefa.day === "Quinta").map(filteredTarefa => (
               <p>
                 {filteredTarefa.text}
               </p>
             ))}
            </Semana>

            <Semana>
              <h4>Sexta</h4>
              {listaTarefas.filter(tarefa => tarefa.day === "Sexta").map(filteredTarefa => (
               <p>
                 {filteredTarefa.text}
               </p>
             ))}
            </Semana>

            <Semana>
              <h4>Sábado</h4>
              {listaTarefas.filter(tarefa => tarefa.day === "Sábado").map(filteredTarefa => (
               <p>
                 {filteredTarefa.text}
               </p>
             ))}
            </Semana>


         
         
          </ContainerDiasDaSemana>  
   </div>
  )
}
export default Planner;