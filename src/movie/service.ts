import { CreateMovieInput, UpdateMovieInput } from '../generated/graphql'
import MovieRepository from './repository'

export class MovieService {
  async getAllMovies() {
    return MovieRepository.getAllMovies()
  }
  async getMovieById(id: string) {
    return MovieRepository.getMovieById(id)
  }
  async createMovie(data: CreateMovieInput) {
    return MovieRepository.createMovie(data)
  }
  async updateMovie(id: string, data: UpdateMovieInput) {
    return MovieRepository.updateMovie(id, data)
  }
  async deleteMovie(id: string) {
    return MovieRepository.deleteMovie(id)
  }
}
