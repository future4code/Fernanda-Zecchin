import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import {Etapa1} from "./components/Etapa1.js";
import {Etapa2} from "./components/Etapa2.js";
import {Etapa3} from "./components/Etapa3.js";
import {Etapa4} from "./components/Etapa4.js";


// class MyButton extends Component {
//   render() {
//     return <button>Próxima Etapa</button>
//   }
// }


 class App extends React.Component {
    state = {
      etapa: 1,
    }

    mudarForm = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1/>;
          
          case 2:
            return <Etapa2/>;
            case 3:
              return <Etapa3/>;
               case 4:
                 return <Etapa4/>;
                default:
      }
    }

    proximaEtapa = () => {
      const formAtual = this.state.etapa;
      const proximoForm = formAtual + 1

      this.setState({etapa: proximoForm})

    }

   render() {
    
   
     return (
      <div className={"App"}>
       
       {this.mudarForm()}
       <button onClick={this.proximaEtapa}>Próxima Etapa</button>
     
    </div>
     )
   }
 }

export default App;
