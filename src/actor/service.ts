import { UpdateActorInput } from '../generated/graphql'
import { ActorRequest } from './models/request'
import ActorRepository from './repository'

export default class ActorService {
  async getAllActors() {
    return ActorRepository.getAllActors()
  }

  async getActorById(id: string) {
    return ActorRepository.getActorById(id)
  }

  async createActor(data: ActorRequest) {
    return ActorRepository.createActor(data)
  }

  async updateActor(id: string, data: UpdateActorInput) {
    return ActorRepository.updateActor(id, data)
  }

  async deleteActor(id: string) {
    return ActorRepository.deleteActor(id)
  }
}
