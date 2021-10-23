import { IUser } from '../../../contexts/auth/types'

export interface IMessage {
  id: string
  text: string
  created_at: string
  user_id: string
  user: IUser
}
