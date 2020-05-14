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

  const [profile, setProfile] = useState({
    profile: {
      id: "xUrxMGvODWZa4ZASbfwx",
      age: 26,
      name: "Carol Danvers",
      photo: "https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp",
      bio: "Gosto de voar e de gatos. Procuro relações que respeitem minha independência."
    }
   })

 const [ escolhaPessoa, setEscolhaPessoa] = useState({
   pessoaEscolhida:{
    "id": "71gMbZs2txS9LDvGK5Ew",
    "choice": true
  }
 })


  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {
        setProfile(response.data.profile);
      })
      .catch(err => {
        console.log(err)
      });

     

  }, [])

  const pessoaEscolhida = () => {
    console.log(escolhaPessoa.id)
    const body = {
      id: escolhaPessoa.id,
      choice: true
    }
    axios.
    post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda/choose-person`, body, {
      headers: {'Content-Type': 'application/json'}
    }) .then((response) => {
      setEscolhaPessoa(response)
    }).catch(err => {
      console.log(err)
    })
  
  }


  return(
    <div>
      
        <MatchContainer>
            <Cabecalho>
              <Titulo>AstroMatch </Titulo>
              <FaUserCheck color='purple' size='2rem' />
            </Cabecalho>

                <div>
                  <Imagem src={profile.photo} alt="foto"/>
                </div>
                <Descricao>
                  <Nome>{profile.name},</Nome>
                  <Idade>{profile.age}</Idade>
              </Descricao>
          

              <Bio>
                {profile.bio}
              </Bio>

              <Botoes>
                  <Botao onClick={pessoaEscolhida} variant="fab"  size="large"  > <CoracaoIcon/></Botao>
                  <Botao variant="fab"  size="large" ><ClearIcon/></Botao>
              </Botoes>

        </MatchContainer>

   
    </div>
  )
}

export default TelaInicial;