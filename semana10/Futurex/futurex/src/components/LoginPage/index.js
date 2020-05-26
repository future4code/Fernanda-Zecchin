import React  from 'react';
import logo from '../img/logofuturex.png';
import {Container,
        ContainerSenha,
        Nome,
        Senha,
        BotaoContainer,
        Botao,
        ContainerPrincipal,
        LogoPhoto,
        

                } from '../LoginPage/style';
import  './styled.css';
import {useInputs} from './useInputs';
import axios from 'axios';
import {useHistory} from 'react-router-dom'



export const LoginPage = () => {
  const history = useHistory();
  const [email, onChangeEmail] = useInputs('');
  const [password, onChangePassword] = useInputs('');
  
  const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda";

   const handleLogin = async () => {
    const body = {
      email: email,
      password: password
    };
    try {
      const response = await axios.post(`${baseUrl}/login`, body);
  
      localStorage.setItem("token", response.data.token);
       history.push("/create")
      
    } catch (error) {
      alert("Login falhou")
    }
  }

  return (
    <div>
     <ContainerPrincipal>
      
         <LogoPhoto src={logo} alt='logo'/>
       
          <Container>
            <Nome type="email" placeholder={"Seu Email"} value={email} onChange={onChangeEmail}/>
          </Container>

            <ContainerSenha>
              <Senha  type="password" placeholder={"Senha"} value={password} onChange={onChangePassword}/>
            </ContainerSenha>
        
            <BotaoContainer>
              <Botao onClick={handleLogin}>Enviar</Botao>
            </BotaoContainer>
      </ContainerPrincipal>
    </div>
  )
}


