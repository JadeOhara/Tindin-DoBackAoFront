//forma do typescript de importar 
import express from 'express'
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors'
import * as note from './controllers/note'

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000

app.use(express.static('www'))

app.get('/notes', note.list)
app.get('/notes/:id', note.get)
app.post('/notes', note.create)
app.put('/notes', note.update)
app.delete('/notes', note.remove)

app.listen(PORT, () => {
  console.log(`⚡️[server]: API rodando em http://localhost:${PORT}`)
})








//API SEM ARQUITETURA


// //forma do typescript de importar 
// import express from 'express'
// import { v4 as uuidv4 } from 'uuid';
// import cors from 'cors'

// const app = express()
// app.use(express.json())
// app.use(cors())
// const PORT = 3000

// //é  preciso  tipar as variáveis
// //const contatos: any[] = []

// //interface  obriga o dev a enviar os dados declarados
// interface INote {
//   id: string,
//   title: string,
//   description: number
// }

// //const contatos: INote[] = []
// const notes: Array<INote> = []

// app.use(express.static('www'))

// //list
// app.get('/notes', (req, res) => {

//   res.json(notes)
  
// })

// //list by id
// app.get('/notes/:id', (req, res) => {
//   //console.log(req.params.id)
//   const id = req.params.id

//   if (!id) {
//     return res.status(400).json({ message: 'Informe o campo id' })
//   }

//   const note = notes.find((n) => n.id === id)

//   if (!note) {
//     return res.status(400).json({ message: 'Nenhuma anotação encontrada para o id informado' })
//   }

//   res.send(note)
// })


// //create
// app.post('/notes', (req, res) => {
//   //console.log(req.body)
//   const title = req.body.title
//   const description = req.body.description

//   if (!title) {
//     return res.status(400).json({ message: 'O campo titulo é obrigatório' })
//   }

//   if (!description) {
//     return res.status(400).json({ message: 'O campo descrição é obrigatório' })
//   }

//   notes.push({
//     id: uuidv4(),
//     title,
//     description
//   })

//   res.send({ message: 'Anotação salva com sucesso!' })
// })

// //update
// app.put('/notes', (req, res) => {
//   //console.log(req.body)
//   const id = req.body.id
//   const title = req.body.title
//   const description = req.body.description

//   if (!id) {
//     return res.status(400).json({ message: 'Informe o campo id' })
//   }

//   const note = notes.find((n) => n.id === id)

//   if (!note) {
//     return res.status(400).json({ message: 'Nenhuma anotação encontrada para o id informado' })
//   }

//   if (!title) {
//     return res.status(400).json({ message: 'O campo titulo é obrigatório' })
//   }

//   if (!description) {
//     return res.status(400).json({ message: 'O campo descrição é obrigatório' })
//   }

//   for (const noteObject of notes) {
//     if (noteObject.id === id) {
//       noteObject.title = title
//       noteObject.description = description
//     }
//   }

//   res.send({ message: 'Anotação alterada com sucesso!' })
// })


// //delete
// app.delete('/notes', (req, res) => {
//   //console.log(req.body)
//   const id = req.body.id

//   if (!id) {
//     return res.status(400).json({ message: 'Informe o campo id' })
//   }

//   const note = notes.find((n) => n.id === id)

//   if (!note) {
//     return res.status(400).json({ message: 'Nenhuma anotação encontrada para o id informado' })
//   }

//   for  (const index in notes){
//     if(notes[index].id === id){
//       notes.splice(Number(index),1)
//     }
//   }

//   res.send({ message: 'Anotação excluída com sucesso!' })
// })

// app.listen(PORT, () => {
//   console.log(`⚡️[server]: API rodando em http://localhost:${PORT}`)
// })
