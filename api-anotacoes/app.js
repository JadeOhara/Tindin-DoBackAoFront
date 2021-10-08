const express = require('express')
const { v4: uuidv4 } = require('uuid');
const app = express()
app.use(express.json())
const port = 3000

const notes = []


//read
app.get('/notes', (req, res) => {
  res.send(notes)
})

//read parametro
app.get('/notes/:id', (req, res) => {
  //console.log(req.params.id)
  const id = req.params.id

  if (!id) {
    return res.status(400).json({ message: 'Informe o campo id' })
  }

  const note = notes.find((n) => n.id === id)

  if (!note) {
    return res.status(400).json({ message: 'Nenhuma anotação encontrada para o id informado' })
  }

  res.send(note)
})


//create
app.post('/notes', (req, res) => {
  //console.log(req.body)
  const title = req.body.title
  const description = req.body.description

  if (!title) {
    return res.status(400).json({ message: 'Informe o campo title' })
  }

  if (!description) {
    return res.status(400).json({ message: 'Informe o campo description' })
  }

  notes.push({
    id: uuidv4(),
    title,
    description
  })

  res.send({ message: 'Anotação salva com sucesso!' })
})


//update
app.put('/notes', (req, res) => {
  //console.log(req.body)
  const id = req.body.id
  const title = req.body.title
  const description = req.body.description

  if (!id) {
    return res.status(400).json({ message: 'Informe o campo id' })
  }

  const note = notes.find((n) => n.id === id)

  if (!note) {
    return res.status(400).json({ message: 'Nenhuma anotação encontrada para o id informado' })
  }

  if (!title) {
    return res.status(400).json({ message: 'Informe o campo title' })
  }

  if (!description) {
    return res.status(400).json({ message: 'Informe o campo description' })
  }

  for (const noteObject of notes) {
    if (noteObject.id === id) {
      noteObject.title = title
      noteObject.description = description
    }
  }

  res.send({ message: 'Anotação alterada com sucesso!' })
})


//delete
app.delete('/notes', (req, res) => {
  //console.log(req.body)
  const id = req.body.id

  if (!id) {
    return res.status(400).json({ message: 'Informe o campo id' })
  }

  const note = notes.find((n) => n.id === id)

  if (!note) {
    return res.status(400).json({ message: 'Nenhuma anotação encontrada para o id informado' })
  }

  for  (const index in notes){
    if(notes[index].id === id){
      notes.splice(index,1)
    }
  }

  res.send({ message: 'Anotação excluída com sucesso!' })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})