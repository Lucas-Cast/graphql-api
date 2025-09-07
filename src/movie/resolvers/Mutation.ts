import { MutationResolvers } from '../../generated/graphql'

export const movieMutations: MutationResolvers = {
  createMovie: async (parent, args, context) => {
    return context.movieService.createMovie(args.input)
  },

  updateMovie: async (parent, { id, input }, context) => {
    return context.movieService.updateMovie(id, input)
  },

  deleteMovie: async (parent, { id }, context) => {
    return context.movieService.deleteMovie(id)
  },
}
