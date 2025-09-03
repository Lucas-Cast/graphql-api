import { MovieRequest, MovieUpdateRequest } from './models/request'
import MovieRepository from './repository'

export class MovieService {
  static async getAllMovies() {
    return MovieRepository.getAllMovies()
  }
  static async getMovieById(id: number) {
    return MovieRepository.getMovieById(id)
  }
  static async createMovie(data: MovieRequest) {
    return MovieRepository.createMovie(data)
  }
  static async updateMovie(id: number, data: MovieUpdateRequest) {
    return MovieRepository.updateMovie(id, data)
  }
  static async deleteMovie(id: number) {
    return MovieRepository.deleteMovie(id)
  }
}
