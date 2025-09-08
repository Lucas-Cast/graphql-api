import { CreateMovieInput, UpdateMovieInput } from '../generated/graphql'
import MovieRepository from './repository'

export class MovieService {
  constructor(private movieRepository: MovieRepository) {
    this.movieRepository = movieRepository
  }
  async getAllMovies() {
    return this.movieRepository.getAllMovies()
  }
  async getMovieById(id: string) {
    return this.movieRepository.getMovieById(id)
  }
  async createMovie(data: CreateMovieInput) {
    return this.movieRepository.createMovie(data)
  }
  async updateMovie(id: string, data: UpdateMovieInput) {
    return this.movieRepository.updateMovie(id, data)
  }
  async deleteMovie(id: string) {
    return this.movieRepository.deleteMovie(id)
  }
}
