import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import fe from './Imagem/me.jpg';
import tesoura from './Imagem/tesoura.jpg'
import email from './Imagem/icon.jpg'
import endereco from './Imagem/endereco.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fe} 
          nome="Fernanda Zecchin" 
          descricao="Oi, eu sou a Fernanda. Tenho 35 anos e sou novata na área =] ."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
       <CardPequeno
       imagem = {email}
       nome="Email:" 
       descricao="fe@yahoo.com.br"
      />
     </div>

     <div className="page-section-container">
       <CardPequeno
       imagem ={endereco}
       nome="Endereço:"
       descricao="Rua Passos, 35"
      />
     </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante" 
        />
        
        <CardGrande 
          imagem={tesoura}
          nome="Cabeleireira" 
          descricao="Terapeuta Capilar" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          link="https://www.facebook.com"
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          link="https://www.twitter.com"
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
