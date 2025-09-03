export interface ActorRequest {
  name: string
  birthYear: number
}

export interface ActorByIdRequest {
  id: string
}

export type ActorUpdateRequest = ActorByIdRequest & ActorRequest
