import React from "react";
import styled from "styled-components";
import axios from "axios";


const UsuarioDaLista = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
`

const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ApagarUsuario = styled.button`
  margin-top: 1rem;
  background-color:black;
  color: white;
  padding: 10px;
  border:none;
`

export class ListaUsuario extends React.Component {
  state = {
    usuarioLista: []
  };
  
  componentDidMount() {
    this.pegarListaUsuario()
  }

  pegarListaUsuario = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
    {
      headers: {
        Authorization: "fernanda-zecchin-julian"
      }
    }
   ).then((response) => {
     console.log(response)
     this.setState({usuarioLista: response.data})
   }).catch((error) => {
     console.log(error.response)
   })
  }

  onClickDeletarUsuario = userId => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, 
    {
      headers: {
        Authorization: "fernanda-zecchin-julian"
      }
    }).then((response) => {
      window.alert('Usuário deletado com sucesso!')
      this.pegarListaUsuario()
    }).catch(error => {
      window.alert('Deu um erro')
    });
  }


  render() {
    return <div>
      <Titulo>Lista de Usuários</Titulo>
      <div>
        {this.state.usuarioLista.map((usuario) =>{
             return <UsuarioDaLista>
               <p>{usuario.name}</p>
               <ApagarUsuario onClick={() => this.onClickDeletarUsuario(usuario.id)}>Apagar Usuário</ApagarUsuario>
             </UsuarioDaLista>
        })}
      </div>
    </div>
  }
}