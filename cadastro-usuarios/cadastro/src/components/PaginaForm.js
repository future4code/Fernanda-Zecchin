import React from 'react';
import styled from 'styled-components';
import axios from 'axios';



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


export class PaginaForm extends React.Component {
  state = {
    valorNome: '',
    valorEmail: '',
   
  };

  

  onChangevalorNome = (event) => {
    this.setState({valorNome: event.target.value})
  };

  onChangevalorEmail = (event) => {
    this.setState({valorEmail: event.target.value})
  };

  criarUsuario = () => {
    const body = {
      name: this.state.valorNome,
      email: this.state.valorEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
      body, 
      {
      headers: {
        Authorization: 'fernanda-zecchin-julian'
      }
    }).then(response => {
      window.alert("deu certo")
    }).catch(error => {
      window.alert("deu erro")
    })
    this.setState({valorNome: "", valorEmail:""})
  }

  render(){

     return (
       
      <FormContainer>
          <h1>Cadastro</h1>
              <p>Nome:</p>
              <input 
              placeholder={"Seu nome"}
              onChange={this.onChangevalorNome}
              value={this.state.valorNome}
              />
              <p>E-mail:</p>
              <input
              placeholder={'Seu e-mail'}
              onChange={this.onChangevalorEmail}
              value={this.state.valorEmail}
              />
          <BotaoSalvar onClick={this.criarUsuario}>Salvar</BotaoSalvar>
      </ FormContainer>

       
     )
  }
}