import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  border: 2px solid black;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin: auto 0;
  height: 60vh;

`
const BotaoSalvar = styled.button`
  margin-top: 1rem;
  background-color:black;
  color: white;
  padding: 10px;
  border:none;
`



class App extends React.Component {
  render () {
    return (
      <div>
      < FormContainer>
        <h1>Cadastro</h1>
        <p>Nome:</p>
        <input/>
        <p>E-mail:</p>
        <input/>
        <BotaoSalvar>Salvar</BotaoSalvar>
        <BotaoSalvar>Ir para página de lista</BotaoSalvar>
      </ FormContainer>
      </div>
    )
  }
}

export default App;
