import { actor } from '../db/actor'
import { movieActor } from '../db/movie-actor'
import { ActorRequest } from './models/request'

export default class ActorRepository {
  static async getAllActors() {
    return actor
  }

  static async getActorById(id: number) {
    return actor.find(a => a.id === id)
  }

  static async createActor(data: ActorRequest) {
    actor.push({ id: new Date().getTime(), ...data })
    return actor[actor.length - 1]
  }

  static async updateActor(id: number, data: ActorRequest) {
    const index = actor.findIndex(a => a.id === id)
    if (index !== -1) {
      actor[index] = { id, ...actor[index], ...data }
      return actor[index]
    }
  }

  static async deleteActor(id: number) {
    const index = actor.findIndex(a => a.id === id)
    if (index !== -1) {
      const filteredMovieActors = movieActor.filter(ma => ma.actorId !== id)
      movieActor.length = 0
      movieActor.push(...filteredMovieActors)
      const deletedActor = actor.splice(index, 1)
      return deletedActor[0]
    }
  }
}
