import { ActorResponse } from '../../actor/models/response'

export interface MovieResponse {
  id: number
  title: string
  director: string
  releaseYear: number
  actors: ActorResponse[]
}
