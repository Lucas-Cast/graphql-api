import { MovieRequest, MovieUpdateRequest } from './models/request'
import { movie } from '../db/movie'
import { movieActor } from '../db/movie-actor'
import { actor } from '../db/actor'
import { deleteOrUpdateMovieActorsByMovieId, getMovieWithActors } from '../utils/relation-utils'
import { getFirstOrDefault } from '../utils/array-utils'
import { MovieEntity } from './entities/movie'

export default class MovieRepository {
  static async getAllMovies() {
    const movieWithActors = getMovieWithActors(movie, movieActor, actor)
    return movieWithActors
  }

  static async getMovieById(id: number) {
    const movieById = movie.find(m => m.id === id)
    if (!movieById) return undefined
    const movieWithActors = getMovieWithActors([movieById], movieActor, actor)
    return getFirstOrDefault(movieWithActors)
  }

  static async createMovie(data: MovieRequest) {
    const { actorsIds, ...movieData } = data
    const newMovie = { id: new Date().getTime(), ...movieData }
    const newMovieActors = (actorsIds || []).map(actorId => ({
      id: new Date().getTime(),
      movieId: newMovie.id,
      actorId,
    }))
    movieActor.push(...newMovieActors)
    movie.push(newMovie)
    return { ...newMovie, actors: actor.filter(a => actorsIds?.includes(a.id)) }
  }

  static async updateMovie(id: number, data: MovieUpdateRequest) {
    const { actorsIds, ...movieData } = data
    const index = movie.findIndex(m => m.id === id)
    if (index !== -1) {
      const newMovieActors = (actorsIds || []).map(actorId => ({
        id: new Date().getTime(),
        movieId: id,
        actorId,
      }))
      deleteOrUpdateMovieActorsByMovieId(movieActor, id, newMovieActors)
      movie[index] = { ...movie[index], ...movieData }
      return { ...movie[index], actors: actor.filter(a => actorsIds?.includes(a.id)) }
    }
    return null
  }

  static async deleteMovie(id: number): Promise<MovieEntity | undefined> {
    const index = movie.findIndex(m => m.id === id)
    if (index === -1) return
    deleteOrUpdateMovieActorsByMovieId(movieActor, id)
    const deletedMovie = movie[index]
    movie.splice(index, 1)
    return deletedMovie
  }
}
