import { IPet } from "../types/IPet"
import * as db from '../libs/mysql'

const list = async (age: number = 0) => {
    const result = await db.execute('select * from pets where age >= ?', [age])
    return result.rowns
}

const get = async (id: string) => {
    if (!id) {
      throw new Error("Informe o campo id!")
    }
    
    const pet = await db.execute('select * from pets where id=?', [id])
  
    if (!pet) {
        throw new Error("Nenhum pet encontrado para o id informado!")
    }
  
    return pet.rowns
}

const create = async (pet: IPet) => {
    if (!pet.name) {
        throw new Error("Informe o campo name!")
    }
  
    if (!pet.age) {
        throw new Error("Informe o campo age!")
    }

    if (!pet.owner) {
        throw new Error("Informe o campo owner!")
    }

    await db.execute('insert into pets (name, age, owner) values (?, ?, ?)', [pet.name, pet.age, pet.owner])

    return true
  
}

const update = async (pet: IPet) => {
    if (!pet.id) {
        throw new Error("Informe o campo id!")
    }
  
    const petFound = await db.execute('select * from pets where id=?', [pet.id])
  
    if (!petFound) {
      throw new Error("Nenhum pet encontrada para o id informado!")
    }
  
    if (!pet.name) {
        throw new Error("Informe o campo name!")
    }
  
    if (!pet.age) {
        throw new Error("Informe o campo age!")
    }

    if (!pet.owner) {
        throw new Error("Informe o campo owner!")
    }
  
    await db.execute('update pets set name=?, age=?, owner=? where id=?', [pet.name, pet.age, pet.owner, pet.id])
  
    return true
}

const remove = async (id: string) => {
    if (!id) {
        throw new Error("Informe o campo id!")
    }
  
    const pet = await db.execute('select * from pets where id=?', [id])
    if (!pet) {
        throw new Error("Nenhum pet encontrada para o id informado!")
    }
  
    await db.execute('delete from pets where id=?', [id])
  
    return true
}

export {
    list,
    get,
    create,
    update,
    remove
}
