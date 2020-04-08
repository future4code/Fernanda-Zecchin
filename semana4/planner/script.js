// let lista = document.querySelector("ul");
// let tarefa = document.querySelector("#novaTarefa");
// let btnTarefa = document.querySelector("criarTarefa");

// btnTarefa.addEventListener('click', function(){
//   let itemTarefa = tarefa.value;
//   console.log(itemTarefa)
// })

// function teste(){
//   console.log("Hello World")
//   const nomeDaTarefa = document.getElementById("novaTarefa").value
//   document.getElementById("espacoTexto").innerHTML="<p>" + nomeDaTarefa; + "</p>"

// }
// teste()

 function teste(){
   const meuInput = document.getElementById("meuInput");
   const addTarefa = document.getElementById("addTarefa");
     if (meuInput.value.trim() === ""  ) {
       alert("Preencha o campo com algo válido")
       meuInput.focus()
     } else {
      addTarefa.innerHTML += "<li>" + meuInput.value + "</li>"
    }
  
 }

// function teste(){
//   const meuInput = document.getElementById("meuInput").value;
//   const diaSemana = document.getElementById("diaSemana").value;
//   if(meuInput !== ""){
//       switch(diaSemana){
//           case "segunda":
//               document.getElementById("segunda").innerHTML += "<li>"+tarefa+"</li>"
//               break;
//           case "terca":
//               document.getElementById("terca").innerHTML += "<li>"+meuInput+"</li>"
//               break;
//           case "quarta":
//               document.getElementById("quarta").innerHTML += "<li>"+meuInput+"</li>"
//               break;
//           case "quinta":
//               document.getElementById("quinta").innerHTML += "<li>"+meuInput+"</li>"
//               break;
//           case "sexta":
//               document.getElementById("sexta").innerHTML += "<li>"+meuInput+"</li>"
//               break;
//           case "sabado":
//               document.getElementById("sabado").innerHTML += "<li>"+meuInput+"</li>"
//               break;
//           case "domingo":
//               document.getElementById("domingo").innerHTML += "<li>"+meuInput+"</li>"
//               break;
//       }
//       document.getElementById("meuInput").value="";
//   }
//   else{
//       alert("A tarefa não pode ser vazia!")
//   }
  // const teste =  document.getElementsByTagName("li");
  //     console.log(teste)