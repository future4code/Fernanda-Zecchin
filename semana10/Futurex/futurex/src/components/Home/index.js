import React from 'react';
import {useHistory} from "react-router-dom";
import background from '../img/background.jpg'
import logo from '../img/logofuturex.png'
import {SpaceBack,
        
        BotoesContainer,
        BotaoLogin,
        BotaoSignup,
       
        LogoPhoto,
        TituloDiv,
        Titulo,
        Paragrafo,
      } from '../Home/style'
      
 




function Home(props) {

  const history = useHistory();
 
   
  const goToLoginPage = () => {
     history.push("/login");
   };
  
  const goToTripsPage = () => {
    history.push("/trips");
  };

  return (
    <div>
      <div>
       <LogoPhoto src={logo} alt='logo'/>
       </div>
       <SpaceBack src={background} alt="foto" />
       <TituloDiv>
         <Titulo>Faça sua viagem espacial</Titulo>
         <Paragrafo>Inscreva-se agora mesmo.</Paragrafo>
       </TituloDiv>
        <BotoesContainer>    
          <BotaoLogin onClick={goToLoginPage}>apenas admin</BotaoLogin>
          <BotaoSignup onClick={goToTripsPage}>veja as viagens</BotaoSignup>
        </BotoesContainer>
    
  </div>
  )
}

export default Home;
