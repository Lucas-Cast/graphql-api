import ActorService from './actor/service'
import { MovieService } from './movie/service'
import { Request } from 'express'

export interface Context extends Request {
  movieService: MovieService
  actorService: ActorService
}

export type GraphQLContext = Context

export const context = ({ req }: { req: Request }): GraphQLContext => {
  const movieService = new MovieService()
  const actorService = new ActorService()
  return {
    ...req,
    movieService,
    actorService,
  } as GraphQLContext
}
