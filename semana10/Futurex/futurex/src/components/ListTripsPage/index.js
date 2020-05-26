import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import  './trips.css'
import {LogoPhoto, LogoContainer} from '../ListTripsPage/style'
import logo from '../img/logofuturex.png'
import astrounauta from '../img/22.jpg'
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
      <div>
        <img src={astrounauta} className="fotoprincipal" alt='astronauta'/>
      </div>
      <div className="container">
          <div className="foto1">
            <img src={'https://picsum.photos/200/300'}  alt='foto'/>
            <div className="descricao">
              <div>{trips.map((trips) => {
                return <div>{trips.description}</div>
              })}</div>
            <h3>Surfando em Marte</h3>
            <button onClick={goToDetailsTripPage}>saiba mais</button>
            <button onClick={goToForm}>Inscreva-se</button>
            </div>
          </div>
         

          <div className="foto2">
            <img src={'https://picsum.photos/200/300'} alt='foto'/>
            <div className="descricao">
               <h3>Surfando em marte</h3>
              <div className="botao_container">
                <button>saiba mais </button>
                <button>inscreva-se</button>
              </div>
            </div>
          </div>

          <div className="foto3">
            <img src={'https://picsum.photos/200/300'} alt='foto'/>
            <div className="descricao">
              <h3>Surfando em jupiter</h3>
              <button>saiba mais</button>
              <button>Inscreva-se</button>
            </div>
          </div>
      
          <div className="foto4">
            <img src={'https://picsum.photos/200/300'} alt='foto'/>
            <div className="descricao">
              <h3>Surfando em plutao</h3>
              <button>saiba mais </button>
              <button>Inscreva-se</button>
            </div>
          </div>

          <div className="foto5">
            <img src={'https://picsum.photos/200/300'} alt='foto'/>
            <div className="descricao">
              <h3>Surfando em saturno</h3>
              <button>Detalhes da Viagem </button>
              <button>Inscreva-se</button>
            </div>
          </div>

          <div className="foto6">
            <img src={'https://picsum.photos/200/300'} alt='foto'/>
            <div className="descricao">
              <h3>Surfando em sol</h3>
              <button>Detalhes da Viagem </button>
              <button>Inscreva-se</button>
            </div>
          </div>
        
      </div> 
    </div>
  )
}

export default ListTripsPages;

