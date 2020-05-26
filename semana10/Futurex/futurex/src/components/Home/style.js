import styled from 'styled-components';
import background from '../img/background.jpg'


export const SpaceBack = styled.img`
  background-image:url(${background});
  background-repeat: no-repeat;
  background-attachment:fixed;
  position:fixed;
  width:100%;
  filter: brightness(45%) 
  
`

export const LogoPhoto = styled.img`
    width: 20%;  
    margin: 20px;
    position:absolute;
    z-index: 99999;
 
`

export const BotoesContainer = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-evenly;
   position: absolute;
   top: 60%;
`

export const BotaoLogin = styled.button`
    background: transparent;
    border: 1px solid white;
    border-radius: 15px;
    width: 15%;
    height: 30px;
    color: #FEE600;
    cursor: pointer;
    
  `

export const BotaoSignup = styled.button`
    background: transparent;
    border: 1px solid white;
    border-radius: 15px;
    width: 15%;
    height: 30px;
    color: #FEE600;
    cursor: pointer;
`  
export const TituloDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    position:absolute;
    z-index: 99999;
    top: 30%;
    

`
export const Titulo = styled.h1`
    
    margin-left: 18rem;
    color: whitesmoke;
    font-weight: lighter;
    text-transform: uppercase;

`

export const Paragrafo = styled.p`
   margin-left: 18rem;
   margin-top: -1rem;
   color: whitesmoke;
   font-size: 12px;


`