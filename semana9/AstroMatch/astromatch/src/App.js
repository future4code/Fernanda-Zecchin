import React,{useState, useEffect} from 'react';

import styled from 'styled-components'
import axios from 'axios'
import TelaInicial from './TelaInicial';
import Match from './TelaInicial/Matches';




const ContainerPrincipal = styled.div`
  margin: 0 auto;
  margin-top: 5rem;

`

function App() {
   
   const [ escolhePagina , setEscolhePagina] = useState('inicial')
   const onClickMudarPagina = () => {
     if(escolhePagina === 'inicial') {
      setEscolhePagina('match')
     } else {
       setEscolhePagina('inicial')
     }
     
   }

   let mudarPagina 
   if(escolhePagina === 'inicial') {
     mudarPagina = <TelaInicial mudarPaginas={onClickMudarPagina}/>
   } else {
     mudarPagina = <Match mudarPaginas={onClickMudarPagina}/>
   }

   
  const onClickLimpar = () => {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda/clear")  
    .then(response => {
      
    })
    .catch(err => {
      console.log(err)
    })
}


  return (
    <ContainerPrincipal>
    
      
     {mudarPagina}
     <button onClick={onClickLimpar}>Limpar Match</button>
    </ContainerPrincipal>
  );
}

export default App;
