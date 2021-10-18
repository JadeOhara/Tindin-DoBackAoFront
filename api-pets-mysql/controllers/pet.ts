import { Request, Response } from 'express'
import * as pet from '../services/pet'
import { error } from '../libs/bindError'

const list = async (req: Request<any>, res: Response<any>) => {
    try {
        const age: number = Number(req.query.age)
        const pets = await pet.list(age)
        return res.json(pets)
    } catch (err: any) {
        return error(res, err)
    }
}

const get = async (req: Request<any>, res: Response<any>) => {
    try {
        const id = req.params.id
        if(!id) return res.status(400).json({ message: 'Informe o campo id!' })    

        const petFound = await pet.get(id)
        res.json(petFound)
    } catch (err: any) {
        return error(res, err)
    }

}

const create = async (req: Request<any>, res: Response<any>) => {
    try {
        const name = req.body.name
        const age = req.body.age
        const owner = req.body.owner

        const petCreated = await pet.create({ name, age, owner })
        return res.json(petCreated)
    } catch (err: any) {
        return error(res, err)
    }

  
}

const update = async (req: Request<any>, res: Response<any>) => {
    try {
        const id = req.body.id
        const name = req.body.name
        const age = req.body.age
        const owner = req.body.owner

        if (!id) {
            return res.status(400).json({ message: 'Informe o campo id!' })
        }

        const petUpdated = await pet.update({ id, name, age, owner })
        return res.json(petUpdated)
    } catch (err: any) {
        return error(res, err)
    }

}

const remove = async (req: Request<any>, res: Response<any>) => {
    try {
        const id = req.body.id

        if (!id) {
            return res.status(400).json({ message: 'Informe o campo id!' })
        }

        await pet.remove(id)
        res.json({ success: true })

    } catch (err: any) {
        return error(res, err)
    }
}

export {
    list,
    get, 
    create,
    update, 
    remove
}