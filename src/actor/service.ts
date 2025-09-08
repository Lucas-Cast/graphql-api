import { UpdateActorInput } from '../generated/graphql'
import { ActorRequest } from './models/request'
import ActorRepository from './repository'

export default class ActorService {
  constructor(private actorRepository: ActorRepository) {
    this.actorRepository = actorRepository
  }
  async getAllActors() {
    return this.actorRepository.getAllActors()
  }

  async getActorById(id: string) {
    return this.actorRepository.getActorById(id)
  }

  async createActor(data: ActorRequest) {
    return this.actorRepository.createActor(data)
  }

  async updateActor(id: string, data: UpdateActorInput) {
    return this.actorRepository.updateActor(id, data)
  }

  async deleteActor(id: string) {
    return this.actorRepository.deleteActor(id)
  }
}
