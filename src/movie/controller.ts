import { MovieService } from './service'
import { Request, Response } from 'express'

export class MovieController {
  static async getAllMovies(req: Request, res: Response) {
    const movies = await MovieService.getAllMovies()

    const moviesWithLinks = movies.map((movie: any) => ({
      ...movie,
      _links: {
        self: { href: `/movies/${movie.id}`, method: 'GET' },
        edit: { href: `/movies/${movie.id}`, method: 'PUT' },
        delete: { href: `/movies/${movie.id}`, method: 'DELETE' },
      },
    }))

    const response = {
      movies: moviesWithLinks,
      _links: {
        self: { href: '/movies', method: 'GET' },
        create: { href: '/movies', method: 'POST' },
      },
    }

    return res.status(200).json(response)
  }

  static async getMovieById(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params
    const movie = await MovieService.getMovieById(Number(id))

    if (!movie) {
      const errorResponse = {
        message: 'Movie not found',
        _links: {
          collection: { href: '/movies', method: 'GET' },
        },
      }
      return res.status(404).json(errorResponse)
    }

    const response = {
      ...movie,
      _links: {
        self: { href: `/movies/${movie.id}`, method: 'GET' },
        edit: { href: `/movies/${movie.id}`, method: 'PUT' },
        delete: { href: `/movies/${movie.id}`, method: 'DELETE' },
        collection: { href: '/movies', method: 'GET' },
      },
    }

    return res.status(200).json(response)
  }

  static async createMovie(req: Request, res: Response) {
    const movie = await MovieService.createMovie(req.body)

    const response = {
      ...movie,
      _links: {
        self: { href: `/movies/${movie.id}`, method: 'GET' },
        edit: { href: `/movies/${movie.id}`, method: 'PUT' },
        delete: { href: `/movies/${movie.id}`, method: 'DELETE' },
        collection: { href: '/movies', method: 'GET' },
      },
    }

    return res.status(201).json(response)
  }

  static async updateMovie(req: Request, res: Response) {
    const { id } = req.params
    const movie = await MovieService.updateMovie(Number(id), req.body)

    if (!movie) {
      const errorResponse = {
        message: 'Movie not found',
        _links: {
          collection: { href: '/movies', method: 'GET' },
        },
      }
      return res.status(404).json(errorResponse)
    }

    const response = {
      ...movie,
      _links: {
        self: { href: `/movies/${movie.id}`, method: 'GET' },
        edit: { href: `/movies/${movie.id}`, method: 'PUT' },
        delete: { href: `/movies/${movie.id}`, method: 'DELETE' },
        collection: { href: '/movies', method: 'GET' },
      },
    }

    return res.status(200).json(response)
  }

  static async deleteMovie(req: Request, res: Response) {
    const { id } = req.params
    const movie = await MovieService.deleteMovie(Number(id))

    if (!movie) {
      const errorResponse = {
        message: 'Movie not found',
        _links: {
          collection: { href: '/movies', method: 'GET' },
        },
      }
      return res.status(404).json(errorResponse)
    }

    const response = {
      message: 'Movie deleted successfully',
      deletedMovie: {
        ...movie,
        _links: {
          collection: { href: '/movies', method: 'GET' },
        },
      },
      _links: {
        collection: { href: '/movies', method: 'GET' },
        create: { href: '/movies', method: 'POST' },
      },
    }

    return res.status(200).json(response)
  }
}
