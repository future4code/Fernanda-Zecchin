import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import  './trips.css'
import {LogoPhoto, LogoContainer} from '../ListTripsPage/style'
import logo from '../img/logofuturex.png'
import axios from 'axios';

function ListTripsPages(props) {
  const history = useHistory();
  const [trips, setTrips] =useState([])

  useEffect(() => {
    axios
      .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda/trips?=fernanda')
      .then(response => {
        setTrips(response.data.trips);
      })
      .catch(err => {
        console.log(err);
      })
  },[])

//  const onClickDetails = () => {
//    console.log(name)
//  }
   
const goToDetailsTripPage = () => {
   history.push("/details");
   console.log(trips)
 };

const goToForm = () => {
  history.push("/form")
}


  return (
    <div>
      <LogoContainer>
      <LogoPhoto src={logo} alt='logo'/>
      </LogoContainer>
      
           {trips.map((trips) => {
                  return  <div className="container" >
                     
                     <h3>{trips.name}</h3>
                     <p>{trips.date}</p>
                     <button onClick={goToDetailsTripPage}>saiba mais</button>
                     <button onClick={goToForm}>Inscreva-se</button>
                     </div>  })}
     
          
         

    </div>
  )
}

export default ListTripsPages;

