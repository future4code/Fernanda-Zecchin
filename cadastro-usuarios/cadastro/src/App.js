import React from 'react';
import styled from 'styled-components';
import {PaginaForm} from './components/PaginaForm';
import {ListaUsuario} from './components/ListaUsuario';



const BotaoSalvar = styled.button`
  margin-top: 1rem;
  background-color:black;
  color: white;
  padding: 10px;
  border:none;
`


class App extends React.Component {

   state = {
     mudaPagina: 'cadastro'
   };
   
 
   onClickmudarPag = () => {
     const proxPagina = (this.state.mudaPagina === 'cadastro') ? ('lista') : ('cadastro')
     this.setState({mudaPagina: proxPagina})
  }



  render () {
    return (
      <div>
      
      <BotaoSalvar onClick={this.onClickmudarPag}>
        {this.state.mudaPagina === 'lista'
          ? 'Ir para a lista'
          : 'Voltar para formulario'}
      </BotaoSalvar>
      {this.state.mudaPagina === 'lista' ? (
        <PaginaForm/>
         ) : (
        <ListaUsuario/>
    )}
        
       
     
      </div>
    )
  }
}

export default App;


