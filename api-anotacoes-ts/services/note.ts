//services
//onde ficam as regras de negócio

import { INote } from "../types/INote"
import { v4 as uuidv4 } from 'uuid';

//const contatos: INote[] = []
const notes: Array<INote> = []


const list = () => {
    return notes
}


const get = (id: string) => {

  if (!id) {
    throw new Error('Informe o campo id')
  }

  const note = notes.find((n) => n.id === id)

  if (!note) {
    throw new Error('Nenhuma anotação encontrada para o id informado')
  }

  return note
}


const create = (note: INote) => {

  if (!note.title) {
    throw new Error('O campo titulo é obrigatório')
  }

  if (!note.description) {
    throw new Error('O campo descrição é obrigatório')
  }

  note.id = uuidv4()

  notes.push(note)

  return note
}


const update = (note: INote) => {

  if (!note.id) {
    throw new Error('Informe o campo id')
  }

  const noteFound  = notes.find((n) => n.id === note.id)

  if (!noteFound) {
    throw new Error('Nenhuma anotação encontrada para o id informado')
  }

  if (!note.title) {
    throw new Error('O campo titulo é obrigatório')
  }

  if (!note.description) {
    throw new Error('O campo descrição é obrigatório')
  }

  for (const noteObject of notes) {
    if (noteObject.id === note.id) {
      noteObject.title = note.title
      noteObject.description = note.description
    }
  }

  return note
}


const remove = (id: string) => {

  if (!id) {
    throw new Error('Informe o campo id')
  }

  const note = notes.find((n) => n.id === id)

  if (!note) {
    throw new Error('Nenhuma anotação encontrada para o id informado')
  }

  for  (const index in notes){
    if(notes[index].id === id){
      notes.splice(Number(index),1)
    }
  }

  return true
}


export {
    list,
    get,
    create,
    update,
    remove
}