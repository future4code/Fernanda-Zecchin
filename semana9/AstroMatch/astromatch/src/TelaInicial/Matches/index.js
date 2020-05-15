import React, {useState, useEffect} from 'react';
import { MatchContainer, Cabecalho } from '../Matches/style';
import  {FaUserMinus}  from "react-icons/fa";
import axios from 'axios';


function Match (props) {

  const [ matches, setMatches] = useState([  
  ])

     useEffect(() => {
          axios
          .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda/matches")  
          .then(response => {
            setMatches(response.data.matches)
          })
          .catch(err => {
            console.log(err)
          })
     }, [])

  return(
    <div>
      <MatchContainer>
        <Cabecalho>
        <h1>AstroMatch</h1>
        <FaUserMinus color='purple' size='2rem'/>
        </Cabecalho>
        <div>
          {matches.map((match) => {
            return <img src={match.photo} alt="foto"/>
          })}
        </div>
       
      </MatchContainer>
    </div>
  )
}

export default Match;