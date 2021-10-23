export interface IResponseAuthenticate {
  data: {
    token: string
    user: IUser
  }
}

export interface IResponseLoadUser {
  data: IUser
}

export interface IUser {
  id: string
  name: string
  github_id: number
  avatar_url: string
  login: string
}

export type IAuthContextData = {
  user: IUser | null
  signInUrl: string
  singOut: () => void
}

export type ISingOutAction = () => void
