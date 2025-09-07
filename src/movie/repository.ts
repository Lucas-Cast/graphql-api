import { movie } from '../db/movie'
import { movieActor } from '../db/movie-actor'
import { actor } from '../db/actor'
import { deleteOrUpdateMovieActorsByMovieId, getMovieWithActors } from '../utils/relation-utils'
import { getFirstOrDefault } from '../utils/array-utils'
import { MovieEntity } from './entities/movie'
import { CreateMovieInput, UpdateMovieInput } from '../generated/graphql'

export default class MovieRepository {
  static async getAllMovies() {
    const movieWithActors = getMovieWithActors(movie, movieActor, actor)
    return movieWithActors
  }

  static async getMovieById(id: string) {
    const movieById = movie.find(m => m.id === id)
    if (!movieById) return null
    const movieWithActors = getMovieWithActors([movieById], movieActor, actor)
    return getFirstOrDefault(movieWithActors)
  }

  static async createMovie(data: CreateMovieInput) {
    const { actors: actorsIds, ...movieData } = data
    const newMovie = { id: new Date().getTime().toString(), ...movieData }
    const newMovieActors = (actorsIds || []).map(actorId => ({
      id: new Date().getTime().toString(),
      movieId: newMovie.id,
      actorId,
    }))
    movieActor.push(...newMovieActors)
    movie.push(newMovie)
    return { ...newMovie, actors: actor.filter(a => actorsIds?.includes(a.id)) } as MovieEntity
  }

  static async updateMovie(id: string, data: UpdateMovieInput) {
    const { actors: actorsIds, ...movieData } = data
    const index = movie.findIndex(m => m.id === id)
    if (index !== -1) {
      const newMovieActors = (actorsIds || []).map(actorId => ({
        id: new Date().getTime().toString(),
        movieId: id,
        actorId,
      }))
      deleteOrUpdateMovieActorsByMovieId(movieActor, id, newMovieActors)
      movie[index] = { ...movie[index], ...movieData } as MovieEntity
      return { ...movie[index], actors: actor.filter(a => actorsIds?.includes(a.id)) }
    }
    return null
  }

  static async deleteMovie(id: string): Promise<MovieEntity | null> {
    const index = movie.findIndex(m => m.id === id)
    if (index === -1) return null
    deleteOrUpdateMovieActorsByMovieId(movieActor, id)
    const deletedMovie = movie[index] as MovieEntity
    movie.splice(index, 1)
    return deletedMovie
  }
}
