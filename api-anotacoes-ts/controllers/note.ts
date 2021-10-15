//controllers
//validar se os campos estão chegando ou não
//os erros são preocupação do service

import { Request, Response } from 'express'
import * as note from '../services/note'
import { error as err } from '../libs/bindError'


const list = (req: Request<any>, res: Response<any>) => {
    const notes = note.list()
    return res.json(notes)
}


const get = (req: Request<any>, res: Response<any>) => {
    try {
        const id  = req.params.id
        if (!id) return res.status(400).json({ message: 'Informe o campo id' })
        
        const noteFound = note.get(id)
        res.json(noteFound)

    } catch (error: any) {
        return err(res,error)
    }

}


const create = (req: Request<any>, res: Response<any>) => {

  try {
    const title = req.body.title
    const description = req.body.description

    const noteCreated = note.create({ title, description })
    return res.json(noteCreated)

  } catch (error: any) {
    return err(res,error)
  }
}


const update = (req: Request<any>, res: Response<any>) => {
    
    try {
        const id = req.body.id
        const title = req.body.title
        const description = req.body.description
      
        if (!id) {
          return res.status(400).json({ message: 'Informe o campo id' })
        }

        const noteUpdated = note.update({ id, title, description })
        return res.json(noteUpdated)

    } catch (error: any) {
        return err(res,error)
    }
}


const remove = (req: Request<any>, res: Response<any>) => {
    
    try {
        const id = req.body.id

        if (!id) {
        return res.status(400).json({ message: 'Informe o campo id' })
        }

        note.remove(id)
        res.json({ success: true })

    } catch (error: any) {
        return err(res,error)
    }
}


export {
    list,
    get,
    create,
    update,
    remove
}