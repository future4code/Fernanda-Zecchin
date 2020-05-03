import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

  class App extends React.Component{
     state = {
       historico:[
        {
          "core_serial": "Merlin1A",
          "block": null,
          "status": "lost",
          "original_launch": "2006-03-24T22:30:00.000Z",
          "original_launch_unix": 1143239400,
          "missions": [
              {
                  "name": "FalconSat",
                  "flight": 1
              }
          ],
          "reuse_count": 0,
          "rtls_attempts": 0,
          "rtls_landings": 0,
          "asds_attempts": 0,
          "asds_landings": 0,
          "water_landing": false,
          "details": "Engine failure at T+33 seconds resulted in loss of vehicle"
      },
       ]
     }

    render () {
        return (
            <div>
               <h1>Histórico</h1>
               {this.state.historico.map(dados => {
                 return (
                   <div>
                     <p><strong>Título:</strong>{dados.core_serial}</p>
                     <p><strong>Dia do evento:</strong>{dados.status}</p>
                     <p><strong>Título:</strong>{dados.original_launch}</p>
                     <p><strong>Título:</strong>{dados.flight_number}</p>
                     <p><strong>Título:</strong>{dados.meters}</p>
                     <p><strong>Título:</strong>{dados.feet}</p>
                     <p><strong>Missões:</strong>{dados.historico.missions.map(missoes => {
                       return <span>{missoes.name};</span>
                      
                     })} </p>
                      <p><strong>Título:</strong>{dados.reuse_count}</p>
                     <p><strong>Dia do evento:</strong>{dados.status}</p>
                     <p><strong>Título:</strong>{dados.original_launch}</p>
                     <p><strong>Título:</strong>{dados.flight_number}</p>
                     <p><strong>Título:</strong>{dados.meters}</p>
                     <p><strong>Título:</strong>{dados.feet}</p>
                     <p><strong>Título:</strong>{dados.feet}</p>

                     
                   </div>
                 )
               })}
            </div>
      )
    };
}
export default App;
