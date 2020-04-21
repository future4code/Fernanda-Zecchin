import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Jonas from './img/jonas.jpg'
import Pug from './img/pug.jpg'
import Rebeca from './img/rebeca.jpg'
import Carro from './img/carro.jpg'
import Barco from './img/barco.jpg'
import Tarcila from './img/tarcila.jpg'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        
        <Post
         nomeUsuario={'Jonas'}
         fotoUsuario={Jonas}
         fotoPost={Pug}
       />

        <Post
         nomeUsuario={'Rebeca'}
         fotoUsuario={Rebeca}
         fotoPost={Carro}
       />

        <Post
         nomeUsuario={'Tarcila'}
         fotoUsuario={Barco}
         fotoPost={Tarcila}
       />
       
       </div>
    );
  }
}

export default App;
