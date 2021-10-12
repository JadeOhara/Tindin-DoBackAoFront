//forma do typescript de importar 
import express from 'express'

const app = express()
const PORT = 3000

//é  preciso  tipar as variáveis
//const contatos: any[] = []

//interface  obriga o dev a enviar os dados declarados
interface IContato {
  name: string,
  age: number
}

//const contatos: IContato[] = []
const contatos: Array<IContato> = []

app.use(express.static('www'))

app.get('/users', (req, res) => {

  contatos.push({
    name:"Jade",
    age:29,
  })
  res.json(contatos)
  
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: API rodando em http://localhost:${PORT}`)
})
