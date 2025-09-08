import { PrismaClient } from '@prisma/client'
import ActorService from '../actor/service'
import { MovieService } from '../movie/service'
import MovieRepository from '../movie/repository'
import ActorRepository from '../actor/repository'

export class ServiceFactory {
  static createServices(prisma: PrismaClient) {
    const movieRepository = new MovieRepository(prisma)
    const actorRepository = new ActorRepository(prisma)

    const movieService = new MovieService(movieRepository)
    const actorService = new ActorService(actorRepository)

    return {
      movieService,
      actorService,
    }
  }
}
