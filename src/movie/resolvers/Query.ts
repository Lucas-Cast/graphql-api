import { QueryResolvers } from '../../generated/graphql'

export const movieQueries: QueryResolvers = {
  movies: async (parent, args, context) => {
    return context.movieService.getAllMovies()
  },
  movie: async (parent, { id }, context) => {
    return context.movieService.getMovieById(id)
  },
}
