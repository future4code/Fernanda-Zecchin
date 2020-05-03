import React from "react";

export class ListaUsuario extends React.Component {
  state = {
    usuarioLista: [
      {
          "id": "19e6d756-53e1-4853-8ae0-5d8b84b55b91",
          "name": "Fernanda"
      }
    ]
  }

  render() {
    return <div>
      <h1>Lista de Usuários</h1>
      <div>
        {this.state.usuarioLista.map((usuario) =>{
             return <div>
               <p>{usuario.name}</p>
               <button>Apagar Usuário</button>
             </div>
        })}
      </div>
    </div>
  }
}