import { PrismaClient } from '@prisma/client'
import ActorService from './actor/service'
import { MovieService } from './movie/service'
import { Request } from 'express'
import MovieRepository from './movie/repository'
import { ServiceFactory } from './core/service-factory'

export interface Context extends Request {
  movieService: MovieService
  actorService: ActorService
  movieRepository: MovieRepository
}

export type GraphQLContext = Context

const prisma = new PrismaClient()

export const context = ({ req }: { req: Request }): GraphQLContext => {
  const { movieService, actorService } = ServiceFactory.createServices(prisma)
  return {
    ...req,
    movieService,
    actorService,
  } as GraphQLContext
}
