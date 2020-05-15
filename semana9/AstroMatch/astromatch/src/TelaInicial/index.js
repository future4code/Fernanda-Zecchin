import React, {useState, useEffect} from 'react';
import CoracaoIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear'
import Botao from '@material-ui/core/Button'
import axios from 'axios';
import  {FaUserCheck}  from "react-icons/fa";

import {
  MatchContainer, 
  Imagem,
  Botoes,
  Descricao,
  Nome,
  Idade,
  Bio,
  Cabecalho,
  Titulo
} from './style';




const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda/person"


function TelaInicial(props) {

  
  const [profile, setProfile] = useState({});

 



  useEffect(() => {
   mostraPessoas()
     

  }, []);

  const mostraPessoas = () => {
    axios
    .get(baseUrl)
    .then(response => {
      setProfile(response.data.profile);
    })
    .catch(err => {
      console.log(err)
    });
   
  }

  const pessoaEscolhida = (id) => {
   
    const body = {
      id: id,
      choice: true
    }
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda/choose-person`, body)
    .then((response) => {
     
    }).catch(err => {
      console.log(err)
    })
    //mostraPessoas()
  }
  
 

  

  return(
    <div>
      
        <MatchContainer>
            <Cabecalho>
              <Titulo>AstroMatch </Titulo>
              <FaUserCheck  color='purple' size='2rem' />
            </Cabecalho>

                <div>
                  <Imagem src={profile.photo} alt="foto"/>
                </div>
                <Descricao>
                  <Nome>{profile.name},</Nome>
                  <Idade>{profile.age}</Idade>
                  <Bio>{profile.bio}</Bio> 
              </Descricao>
              

              <Botoes>
                  <Botao onClick={pessoaEscolhida(profile.id)}  variant="outline"  size="large"  ><CoracaoIcon/> </Botao>
                  <Botao  variant="fab"  size="large" ><ClearIcon/></Botao>
              </Botoes>

        </MatchContainer>

   
    </div>
  )
}

export default TelaInicial;