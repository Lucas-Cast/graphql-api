export interface MovieRequest {
  title: string
  director: string
  releaseYear: number
  actorsIds?: string[]
}

export interface MovieByIdRequest {
  id: string
}

export type MovieUpdateRequest = MovieRequest & MovieByIdRequest
