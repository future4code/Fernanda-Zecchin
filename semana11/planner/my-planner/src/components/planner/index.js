import React, {useState} from "react";
import {ContainerCriarTarefa, ContainerDiasDaSemana} from "./style"



 function Planner() {
   const[adicionarTarefa, setAdicionarTarefa] = useState("");

   const onChangeTarefa = event => {
    setAdicionarTarefa(event.target.value);
   };

   const onClickAdicionar = () => {
     console.log(adicionarTarefa)
   }

  return (
    <div>
      <ContainerCriarTarefa>
        <input
          type="text"
          placeholder="adicione sua tarefa"
          value={adicionarTarefa}
          onChange={onChangeTarefa}
        />

          <select>
            <option value=""></option>
            <option value="segunda">Segunda</option>
            <option value="terca">Terça</option>
            <option value="quarta">Quarta</option>
            <option value="quinta">Quinta</option>
            <option value="sexta">Sexta</option>
            <option value="sabado">Sábado</option>
            <option value="domingo">Domingo</option>
          </select>

          <button onClick={onClickAdicionar}>Criar Tarefa</button>

      </ContainerCriarTarefa>

          <ContainerDiasDaSemana>
            <div>Segunda</div>
            <div>Terça</div>
            <div>Quarta</div>
            <div>Quinta</div>
            <div>Sexta</div>
            <div>Sábado</div>
            <div>Domingo</div>
          </ContainerDiasDaSemana>  
    </div>
  )
}
export default Planner;