import React, {useState, useEffect} from 'react';
import { MatchContainer, Cabecalho } from '../Matches/style';
import  {FaUserMinus}  from "react-icons/fa";



function Match () {

  return(
    <div>
      <MatchContainer>
        <Cabecalho>
        <h1>AstroMatch</h1>
        <FaUserMinus color='purple' size='2rem'/>
        </Cabecalho>
       
      </MatchContainer>
    </div>
  )
}

export default Match;