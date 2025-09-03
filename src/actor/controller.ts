import { ActorByIdRequest, ActorUpdateRequest } from './models/request'
import { ActorResponse } from './models/response'
import ActorService from './service'
import { Request, Response } from 'express'

export default class ActorController {
  static async getAllActors(req: Request, res: Response<ActorResponse[]>) {
    const actors = await ActorService.getAllActors()
    return res.status(200).send(actors)
  }

  static async getActorById(
    req: Request<ActorByIdRequest>,
    res: Response<ActorResponse | { message: string }>
  ) {
    const { id } = req.params
    const actor = await ActorService.getActorById(Number(id))
    if (actor) {
      return res.status(200).send(actor)
    }
    return res.status(404).send({ message: 'Actor not found' })
  }

  static async createActor(req: Request, res: Response) {
    const actor = await ActorService.createActor(req.body)
    return res.status(201).send(actor)
  }

  static async updateActor(
    req: Request<ActorUpdateRequest>,
    res: Response<ActorResponse | { message: string }>
  ) {
    const { id } = req.params
    const actor = await ActorService.updateActor(Number(id), req.body)
    if (actor) {
      return res.status(200).send(actor)
    }
    return res.status(404).send({ message: 'Actor not found' })
  }

  static async deleteActor(
    req: Request<ActorByIdRequest>,
    res: Response<ActorResponse | { message: string }>
  ) {
    const { id } = req.params
    const actor = await ActorService.deleteActor(Number(id))
    if (actor) {
      return res.status(200).send(actor)
    }
    return res.status(404).send({ message: 'Actor not found' })
  }
}
