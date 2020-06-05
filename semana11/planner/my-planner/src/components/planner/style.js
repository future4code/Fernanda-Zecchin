import styled from "styled-components";

export const ContainerCriarTarefa = styled.div`
  display:flex;
  justify-content:space-evenly;
  margin-top: 1rem;
  border-bottom: 1px  solid black;
  padding-bottom: 1rem;
`

export const ContainerDiasDaSemana = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content:center;
  margin: 1rem;
  column-gap: 1rem;
  

`
export const Semana = styled.div`
  border-right: 1px solid black;
  min-height: 80vh;
  
`