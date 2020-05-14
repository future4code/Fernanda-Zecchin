import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';







export const MatchContainer = styled(Paper)`
    width: 40vw;
    height: 85vh;
    display:flex;
    flex-direction:column;
    align-items: center;
    z-index:2;
    margin:0 auto;
    border: 1px solid black 
    
   
`
export const Cabecalho = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  border-bottom:1px solid black;
  width:100%;
  margin-bottom: 1rem;
  
 
`

export const Titulo = styled.h1`
    
   
`

export const Imagem = styled.img`
  
   width:30vw;
   height: 40vh
   
   
`

export const Botoes = styled.div`
    margin-top: 15px;
   
`
export const Descricao = styled.div`
   display: flex;
   align-items: baseline;
   position: absolute;
   margin-top: 300px;
`

export const Nome = styled.div`
    font-weight:bold;
    font-size: 2rem;
    color: whitesmoke;
`

export const Idade = styled.div`
   margin-left: 10px;
   font-size: 1rem;
   color: whitesmoke;
`

export const Bio = styled.div`
   padding-top: 30px;
 

`

