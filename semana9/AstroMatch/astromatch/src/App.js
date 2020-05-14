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
   
  

  return (
    <ContainerPrincipal>
    
      
      <TelaInicial/>
      <Match/>
     
    </ContainerPrincipal>
  );
}

export default App;
