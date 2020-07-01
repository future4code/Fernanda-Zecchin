import * as fs from 'fs'
import moment from 'moment'

//Tipagem de transações e conta do usuário
type ExtractItem = {
  description: string,
  value: number,
  date:string
}

type Account = {
  name: string,
  birthDate: string,
  cpf: string,
  balance: number,
  extract: ExtractItem[]
}

//Criar uma função que será responsável para cadastrar um usuário em um arquivo JSON.
const CreateAccount = (name: string, birthDateString:string, cpf:string) => {
  //validar a idade do usuario
  const birthDate = moment(birthDateString, "DD/MM/YYYY")
  const today = moment()
  const age = today.diff(birthDate, "years")

  if(age < 18) {
    console.log("Usuário tem que ter mais de 18 anos")
    return;
  }

  //1.Ler o arquivo JSON
  const usersFilePath = "D:/Labenu/Fernanda-Zecchin/semana14/semana14-aula44/aula48/src/users.json"
  const usersFileData: Buffer = fs.readFileSync(usersFilePath);
  const usersString: string = usersFileData.toString();
  console.log(usersString);

  //2. Parsear o arquivo
  const users: Account[] = JSON.parse(usersString);

  //validar o CPF
  const foundUser = users.find((user: Account) => {
    return user.cpf === cpf
  })

  if(foundUser !== undefined) {
    console.log("Já existe um usuário com esse CPF")
    return;
  }

 // console.log(users)
 //console.log(Array.isArray(users))

 //3. Adicionar o usuário no array
 users.push({
   name: name,
   birthDate: birthDateString,
   cpf: cpf,
   balance: 0,
   extract: []
 });
 
 console.log(users)
 //4.Reescrever o arquivo todo, vai para o arquivo users.JSON
 const usersStringiFied = JSON.stringify(users, null, 2) //para identar o arquivo JSON
 fs.writeFileSync(usersFilePath, usersStringiFied)

};


const name = process.argv[2];
const date = process.argv[3];
const cpf = process.argv[4];
CreateAccount(name, date, cpf);