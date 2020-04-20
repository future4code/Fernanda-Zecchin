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

      <label>1. Qual seu nome?</label>
      <input placeholder={'Seu Nome'} onChange={this.onChangevalorNome} value={this.state.valorNome}/>
      <label>2. Qual sua idade?</label>
      <input placeholder={'Sua Idade'} onChange={this.onChangevalorIdade} value={this.state.valorIdade} />
      <label>3. Qual seu email?</label>
      <input placeholder={'Seu E-mail'} onChange={this.onChangevalorEmail} value={this.state.valorEmail}  />
      <label>
        
        4. Qual a sua escolaridade
        <select value={''}>
          <option value={''}></option>
          <option value={'medioIncompleto'}>Ensino Médio Incompleto</option>
          <option value={'medioCompleto'}>Ensino Médio Completo</option>
          <option value={'superiorIncompleto'}>Ensino Superior Incompleto</option>
          <option value={'superiorCompleto'}>Ensino Superior Completo</option>
          
        </select>
      </label>
      <button>Próxima Etapa</button>

    </div>
  }
}

