import { ActorRequest } from './models/request'
import ActorRepository from './repository'

export default class ActorService {
  static async getAllActors() {
    return ActorRepository.getAllActors()
  }

  static async getActorById(id: number) {
    return ActorRepository.getActorById(id)
  }

  static async createActor(data: ActorRequest) {
    return ActorRepository.createActor(data)
  }

  static async updateActor(id: number, data: ActorRequest) {
    return ActorRepository.updateActor(id, data)
  }

  static async deleteActor(id: number) {
    return ActorRepository.deleteActor(id)
  }
}
