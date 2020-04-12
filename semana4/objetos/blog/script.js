//criando arrays dos post

const arrayPost = [];


function criarPost() {
  //pegando valores dos campos
  let titulo = document.getElementById("titulo").value;
  let autor = document.getElementById("autor").value;
  let conteudo = document.getElementById("conteudo").value;
 //criando objeto
  const objPost = {
    titulo: titulo,
    autor: autor,
    conteudo: conteudo
  }
  //add arrays nos objetos
  arrayPost.push(objPost)
  //console.log(arrayPost) 
  //limpando os inputs
  document.getElementById("titulo").value =""
  document.getElementById("autor").value =""
  document.getElementById("conteudo").value =""
   
  imprimePost(arrayPost)

}

function imprimePost(array){
  //zera ele antes de começar para não dar efeito acumulativo
 document.getElementById("espacoPosts").innerHTML=""
  for(post of array){
    document.getElementById("espacoPosts").innerHTML+= `<div>
    <h3>${post.titulo}</h3>
    <p>${post.autor}</p>
    <p>${post.conteudo}</p>
    </div>`
  }
}

