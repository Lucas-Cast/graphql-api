import { actorMutations } from './actor/resolvers/Mutation'
import { actorQueries } from './actor/resolvers/Query'
import { Resolvers } from './generated/graphql'
import { genreMutations } from './genre/resolvers/Mutation'
import { genreQueries } from './genre/resolvers/Query'
import { movieMutations } from './movie/resolvers/Mutation'
import { movieQueries } from './movie/resolvers/Query'

export const resolvers: Resolvers = {
  Mutation: {
    ...actorMutations,
    ...movieMutations,
    ...genreMutations,
  },
  Query: {
    ...actorQueries,
    ...movieQueries,
    ...genreQueries,
  },
}
