import { PrismaClient } from '@prisma/client'
import { actor } from '../db/actor'
import { movieActor } from '../db/movie-actor'
import { UpdateActorInput } from '../generated/graphql'
import { ActorEntity } from './entities/actor'
import { ActorRequest } from './models/request'

export default class ActorRepository {
  constructor(private prisma: PrismaClient) {
    this.prisma = prisma
  }
  async getAllActors() {
    return actor
  }

  async getActorById(id: string) {
    return actor.find(a => a.id === id) ?? null
  }

  async createActor(data: ActorRequest) {
    const newActor = { id: new Date().getTime().toString(), ...data }
    actor.push(newActor)
    return newActor
  }

  async updateActor(id: string, data: UpdateActorInput) {
    const index = actor.findIndex(a => a.id === id)
    if (index !== -1) {
      actor[index] = { id, ...actor[index], ...data } as ActorEntity
      return actor[index]
    }
    return null
  }

  async deleteActor(id: string) {
    const index = actor.findIndex(a => a.id === id)
    if (index !== -1) {
      const filteredMovieActors = movieActor.filter(ma => ma.actorId !== id)
      movieActor.length = 0
      movieActor.push(...filteredMovieActors)
      const deletedActor = actor.splice(index, 1)
      return deletedActor[0] ?? null
    }
    return null
  }
}
