import { MovieResponse } from './models/response'
import { MovieService } from './service'
import { Request, Response } from 'express'

export class MovieController {
  static async getAllMovies(req: Request, res: Response<MovieResponse[]>) {
    const movies = await MovieService.getAllMovies()
    return res.send(movies)
  }

  static async getMovieById(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params
    const movie = await MovieService.getMovieById(Number(id))
    if (!movie) return res.sendStatus(404)
    return res.json(movie)
  }

  static async createMovie(req: Request, res: Response) {
    const movie = await MovieService.createMovie(req.body)
    return res.status(201).json(movie)
  }

  static async updateMovie(req: Request, res: Response) {
    const { id } = req.params
    const movie = await MovieService.updateMovie(Number(id), req.body)
    if (!movie) return res.sendStatus(404)
    return res.json(movie)
  }

  static async deleteMovie(req: Request, res: Response) {
    const { id } = req.params
    const movie = await MovieService.deleteMovie(Number(id))
    if (!movie) return res.sendStatus(404)
    return res.json(movie)
  }
}
