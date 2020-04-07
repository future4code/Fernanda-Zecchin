// let lista = document.querySelector("ul");
// let tarefa = document.querySelector("#novaTarefa");
// let btnTarefa = document.querySelector("criarTarefa");

// btnTarefa.addEventListener('click', function(){
//   let itemTarefa = tarefa.value;
//   console.log(itemTarefa)
// })

function teste(){
  console.log("Hello World")
  const nomeDaTarefa = document.getElementById("novaTarefa").value
  document.getElementById("espacoTexto").innerHTML="<p>" + nomeDaTarefa; + "</p>"

}
teste()