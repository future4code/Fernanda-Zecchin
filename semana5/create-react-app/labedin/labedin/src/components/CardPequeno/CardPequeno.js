import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
   return (
     <div className="smallcard-container">

       <div>
           <b>{props.nome}</b>
           <p>{props.descricao}</p>
       </div>
      </div>
   );
}
export default CardPequeno;