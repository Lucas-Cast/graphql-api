import { actorMutations } from './actor/resolvers/Mutation'
import { actorQueries } from './actor/resolvers/Query'
import { Resolvers } from './generated/graphql'
import { movieMutations } from './movie/resolvers/Mutation'
import { movieQueries } from './movie/resolvers/Query'

export const resolvers: Resolvers = {
  Mutation: {
    ...actorMutations,
    ...movieMutations,
  },
  Query: {
    ...actorQueries,
    ...movieQueries,
  },
}
