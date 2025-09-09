import { QueryResolvers } from '../../generated/graphql'

export const genreQueries: QueryResolvers = {
  genres: async (_, __, { genreService }) => {
    return genreService.getAllGenres()
  },
  genre: async (_, { id }, { genreService }) => {
    return genreService.getGenreById(id)
  },
}
