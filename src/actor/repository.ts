import { actor } from '../db/actor'
import { movieActor } from '../db/movie-actor'
import { UpdateActorInput } from '../generated/graphql'
import { ActorEntity } from './entities/actor'
import { ActorRequest } from './models/request'

export default class ActorRepository {
  static async getAllActors() {
    return actor
  }

  static async getActorById(id: string) {
    return actor.find(a => a.id === id) ?? null
  }

  static async createActor(data: ActorRequest) {
    const newActor = { id: new Date().getTime().toString(), ...data }
    actor.push(newActor)
    return newActor
  }

  static async updateActor(id: string, data: UpdateActorInput) {
    const index = actor.findIndex(a => a.id === id)
    if (index !== -1) {
      actor[index] = { id, ...actor[index], ...data } as ActorEntity
      return actor[index]
    }
    return null
  }

  static async deleteActor(id: string) {
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
