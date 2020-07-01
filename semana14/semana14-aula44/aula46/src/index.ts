import moment  from 'moment'
moment.locale("pt-br")
// tiraria o moment locale para ficar com o horário de Londres
const inicio = moment("21/01/2020 20:00", "DD/MM/YYYY HH:mm")
const final = moment("23/01/2020 10:00", "DD/MM/YYYY HH:mm")
const projetoInicio = moment("10/09/2020 19:00", "DD/MM/YYYY HH:mm")
const projetoFinal = moment("10/09/2020 19:00", "DD/MM/YYYY HH:mm")
const praiaInicio = moment("20/09/2020 19:00", "DD/MM/YYYY HH:mm")
const praiaFinal = moment("01/10/2020 13:00", "DD/MM/YYYY HH:mm")

type evento = {
  nome: string,
  descricao: string,
  dataInicio:string,
  dataFinal:string
}

const todosEventos: evento[] = [
  {
    nome: "Festa no bosque",
    descricao: "Melhor festa",
    dataInicio:String(inicio.format("dddd [,] DD [de] MMMM [de] YYYY [,] HH:mm")),
    dataFinal: String(final.format("DD/MM/YYYY [até às] HH:mm"))
  },
  {
    nome: 'Reunião em casa',
    descricao: "projetos",
    dataInicio: String(projetoInicio.format( "DD/MM/YYYY [às] HH:mm")),
    dataFinal: String(projetoFinal.format ("DD/MM/YYYY [até às] HH:mm"))
  },
  {
    nome: "Praia",
    descricao: "Curtir o verão",
    dataInicio: String(praiaInicio.format ("DD/MM/YYYY [às] HH:mm")),
    dataFinal: String(praiaFinal.format ("DD/MM/YYYY [até às] HH:mm"))
  }
]
console.log(todosEventos)

