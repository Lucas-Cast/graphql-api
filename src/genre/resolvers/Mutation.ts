import { MutationResolvers } from '../../generated/graphql'

export const genreMutations: MutationResolvers = {
  createGenre: async (_, { input }, { genreService }) => {
    return genreService.createGenre(input)
  },
  updateGenre: async (_, { id, input }, { genreService }) => {
    return genreService.updateGenre(id, input)
  },
  deleteGenre: async (_, { id }, { genreService }) => {
    return genreService.deleteGenre(id)
  },
}
