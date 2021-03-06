import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';







export const MatchContainer = styled(Paper)`
    width: 40vw;
    height: 85vh;
    display:flex;
    flex-direction:column;
    align-items: center;
    
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
   border: 1px solid black;
   width:30vw;
   height: 50vh;
   
   
`

export const Botoes = styled.div`
    margin-top: 3rem;
    display:flex;
    
   
`
export const Descricao = styled.div`
   display: flex;
   flex-direction: column;
   
   position: absolute;
   margin-top: 400px;
   
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
   width:30vw;
   height: 50vh;
   color: whitesmoke;

 

`

