import styled from 'styled-components';



export const ContainerPrincipal = styled.div`
     display:flex;
     flex-direction: column;
     justify-content: center;
     width: 100vw;
     height:100vh;
     background-color: #2B2D3C;

`


export const LogoPhoto = styled.img`
    width: 20%;  
    margin: 10px;
    margin-bottom: 5rem;
    
`

export const Container = styled.div`
  display:flex;
  justify-content:space-evenly;
  margin: 0;

  
`

export const Nome = styled.input`
   background-color:#2B2D3C;
   border: none;
   border-bottom: 1px solid yellow;
   margin-bottom: 2rem;  
   width: 50vw;

` 

export const ContainerSenha = styled.div`
    display: flex;
    justify-content: center;

    
`

export const Senha = styled.input`
   background-color:#2B2D3C;
   border: none;
   border-bottom: 1px solid yellow;
   width: 50vw;
   
` 

export const BotaoContainer = styled.div`
   display:flex;
   justify-content:flex-end;
   width:70vw;
   margin-top: 1rem;
`

export const Botao = styled.button`
    
    background: transparent;
    border: 1px solid white;
    border-radius: 15px;
    width: 15%;
    height: 30px;
    color: #FEE600;
    cursor: pointer;
  
`