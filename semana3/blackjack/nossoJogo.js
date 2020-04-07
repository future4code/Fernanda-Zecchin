console.log("Bem vindo ao jogo BlackJack!");
let cartasComputador="Computador - cartas";
let cartasUsuario="Usuário - cartas";
pontosComputador = 0;
pontosUsuario = 0;

if (confirm("Quer iniciar uma nova rodada?")) {
   for(let i=0; i<2; i++){
      let carta = comprarCarta();
      cartasComputador+=carta.texto+" ";
      pontosComputador+=carta.valor;
       carta = comprarCarta();
      cartasUsuario+=carta.texto+" ";
      pontosUsuario+=carta.valor;
      
   }
   console.log(cartasComputador, `pontuação - ${pontosComputador}`);
   
   console.log(cartasUsuario, `pontuação - ${pontosUsuario}`);

   if((pontosUsuario > pontosComputador)&& pontosUsuario <=21 || (pontosComputador >21 && pontosUsuario<=21)){
   console.log("Usuário ganhou")
   } else if ((pontosComputador > pontosUsuario)&& pontosComputador <=21 || (pontosUsuario >21 && pontosComputador <=21)){
      console.log("O computador ganhou")    
   } else{
      console.log("Empate")
   }

   
} else {
    console.log("O jogo acabou")
}
