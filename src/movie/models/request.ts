export interface MovieRequest {
  title: string
  director: string
  releaseYear: number
  actorsIds?: number[]
}

export interface MovieByIdRequest {
  id: number
}

export type MovieUpdateRequest = MovieRequest & MovieByIdRequest
