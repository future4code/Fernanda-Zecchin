import React from "react";



export class Etapa1 extends React.Component{
  state = {
    valorNome: '',
    valorIdade: '',
    valorEmail: '',
    valorSelect: ''
  };

  onChangevalorNome = (event) => {
    this.setState({valorNome: event.target.value})
  };

  onChangevalorIdade = (event) => {
    this.setState({valorIdade: event.target.value})
  };

  onChangevalorEmail= (event) => {
    this.setState({valorEmail: event.target.value})
  };

  render() {

    return <div>
      <h1>Etapa1 - Dados Gerais</h1>

      <p>1. Qual seu nome?</p>
      <input placeholder={'Seu Nome'} onChange={this.onChangevalorNome} value={this.state.valorNome}/>
      <p>2. Qual sua idade?</p>
      <input placeholder={'Sua Idade'} onChange={this.onChangevalorIdade} value={this.state.valorIdade} />
      <p>3. Qual seu email?</p>
      <input placeholder={'Seu E-mail'} onChange={this.onChangevalorEmail} value={this.state.valorEmail}  />
      <p>4. Qual a sua escolaridade?  </p>
        <select value={''}>
          <option value={''}></option>
          <option value={'medioIncompleto'}>Ensino Médio Incompleto</option>
          <option value={'medioCompleto'}>Ensino Médio Completo</option>
          <option value={'superiorIncompleto'}>Ensino Superior Incompleto</option>
          <option value={'superiorCompleto'}>Ensino Superior Completo</option>
          
        </select>
    
      

    </div>
  }
}

